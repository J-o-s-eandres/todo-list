//Declaracion de las constantes a utilizar
const fecha = document.querySelector('#fecha')
const lista = document.querySelector('#lista')
const input = document.querySelector('#input')
const botonEnter = document.querySelector('#enter')
const check='fa-check-circle'
const uncheck='fa-circle'
const lineThrough = 'line-through'
let id
let LIST = []



//fecha
const FECHA = new Date()
fecha.innerHTML = FECHA.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });

//funcion agg tarea

function agregarTarea(tarea,id,realizado,eliminado){


    if(eliminado){return}

const REALIZADO = realizado ?check :uncheck    //operadores ternarios (? true y : false)
const LINE = realizado ?lineThrough :''

const elemeto=`  
                <li id="elemento">
                    <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
                    <p class="text ${LINE}">${tarea}</p>
                    <i class="fas fa-trash de" data="eliminado" id="${id}"></i>
                </li>  `

    lista.insertAdjacentHTML("beforeend",elemeto)//beforeend=antes de finalizar/afterbegin=despues de haber comenzado
}

//funcion tarea realizada
function tareaRealizada(element){

    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector('.text').classList.toggle(lineThrough)
    LIST[element.id].realizado = LIST[element.id].realizado ?false :true

}

//funcion tarea eliminada
function tareaEliminada(element){

    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].eliminado =true

}



botonEnter.addEventListener('click' ,()=>{

    const tarea = input.value
    if(tarea){
        agregarTarea(tarea,id,false,false)
        LIST.push({//push agg elementos a un array
            nombre : tarea,
            id : id,
            realizado : false,
            eliminado : false
        })
    }
    localStorage.setItem('TODO',JSON.stringify(LIST))
    input.value=''
    id++
})


document.addEventListener('keyup',function(event){//keyup=cuando suelto el teclado

    if(event.key=='Enter'){

        const tarea = input.value
        if(tarea){

            agregarTarea(tarea,id,false,false)
            LIST.push({//push agg elementos a un array
                nombre : tarea,
                id : id,
                realizado : false,
                eliminado : false
            })
        }
        localStorage.setItem('TODO',JSON.stringify(LIST))
        input.value=''
        id++
    }

})


lista.addEventListener('click',function(event){



    const element = event.target
    const elementData = element.attributes.data.value

    if(elementData ==='realizado'){


        tareaRealizada(element)
    }
    else if (elementData ==='eliminado'){

        tareaEliminada(element)
    }
    localStorage.setItem('TODO',JSON.stringify(LIST))
})


let data= localStorage.getItem('TODO')

if(data){
    LIST= JSON.parse(data)
    id = LIST.length
    cargarLista(LIST)
}else{
    LIST=[]
    id = 0
}

function cargarLista(DATA){

    DATA.forEach(function(i){
        agregarTarea(i.nombre,i.id,i.realizado,i.eliminado)
    })
}
