[![pages-build-deployment](https://github.com/J-o-s-eandres/todo-list/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/J-o-s-eandres/todo-list/actions/workflows/pages/pages-build-deployment)


# To-Do List

This is a simple to-do list project developed with HTML, CSS, and JavaScript. It allows users to add, mark as complete, and delete tasks from their to-do list.

<img width="850" alt="Captura de pantalla 2023-10-23 104544" src="https://github.com/J-o-s-eandres/J-o-s-eandres.github.io/assets/79519685/d8717abc-5c5c-4ba2-ad79-d1832ef03867">

## Features

- **Add Tasks:** Users can add new tasks to their list by entering a description and clicking "Add."

- **Mark as Complete:** Tasks can be marked as complete by clicking the checkbox next to each task.

- **Delete Tasks:** Users can remove tasks they no longer wish to keep on their list by clicking the "Delete" button.

## Storing Tasks in LocalStorage

The tasks are stored in the browser's `localStorage`, allowing users to keep their to-do list even after closing the browser. This ensures that your tasks persist between sessions.

## Usage

1. Clone or download this repository to your local machine.

2. Open the `index.html` file in your web browser to run the application.

3. To add a new task, enter the description in the text field and click "Add."

4. To mark a task as complete, click the checkbox next to the task.

5. To delete a task, click the "Delete" button next to the task.

## Customization

If you want to customize the appearance of the to-do list, you can modify the CSS file (`styles.css`) to adjust the styles to your preferences.

## Link App
[Link app](https://j-o-s-eandres.github.io/todo-list/)


```markdown
# Cypress Test for To-Do List 🧪🧪🧪🧪

This repository contains a Cypress test suite for a To-Do List web application. The test suite includes the creation of tasks and the deletion of those tasks.

## Installation

To run these tests, you will need Node.js and Cypress installed on your system. If you haven't already, you can install Cypress using the following commands:

```bash
npm install
```

## Test Description 🧪🧪🧪🧪

The test suite consists of a single test case that creates and deletes 10 tasks in a To-Do List application. Each task is randomly selected from a list of predefined tasks, and it is added to the list. After creating the tasks, the test then proceeds to delete them one by one.

The test flow can be summarized as follows:

1. Visit the To-Do List web application.
2. Create 10 tasks by clicking the input field, typing a random task description, and hitting the "Enter" key.
3. Delete each task one by one by clicking the delete icon.

## Running the Tests 🔬🔬🔬

To run the tests, execute the following command:

```bash
npx cypress run
```

This command will run the Cypress test suite, which will automatically open a browser window to perform the tests. The browser will be controlled by Cypress to simulate user interactions.

## Custom Task Selection

The tests use a custom function called `getTaskRandom()` to select a random task description from a predefined list of tasks. If you want to modify the list of tasks, you can edit the list inside the `getTaskRandom()` function in the test script.

## Test Results 🔬🔬🔬📊 📊 📊 



After running the tests, Cypress will generate test results, including information on passed and failed tests. You can view the results in the Cypress test runner interface or generate HTML reports for a more detailed analysis.

<img src="image.png" alt="Mi Imagen" width="150" height="100">

## Contact

If you have any questions or suggestions, please don't hesitate to get in touch with the developer:

- 👋 Joseandres Montesino
- 📫 How to reach me **joseandresmontesino@gmail.com**

We hope you enjoy this simple to-do list!
