// #usr/bin/env node
import inquirer from "inquirer";
let todo = [];
while (true) {
    let todo_added = await inquirer.prompt([{
            name: "todo",
            type: "input",
            message: "What do you want to add to your ToDo List"
        },
        {
            name: "more_todo",
            type: "confirm",
            message: "Do you want to add anything more to your ToDo List",
            default: "false"
        }
    ]);
    todo.push(todo_added);
    console.log(todo);
    if (todo_added.more_todo == false) {
        break;
    }
}
