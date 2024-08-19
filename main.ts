import inquirer from "inquirer"

let answer = await inquirer .prompt([{
    type: "input",
    name: "answer",
    message: "enter your sentence"
}])

let wordcount =answer.answer.trim().split(" ").length
console.log(`your sentence has ${wordcount} words`)