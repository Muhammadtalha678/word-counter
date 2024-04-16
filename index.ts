#! /usr/bin/env node
import inquirer from "inquirer";


console.log("******* Welcome To Word counter *******");

let answer = await inquirer.prompt([
    {
        name: "word",
        message: "Enter the sentence to count words.",
        type:"input"
    }
])
if (answer.word) {
    let output = answer.word.trim().split(" ")
    console.log(`Total words in your sentences are ${output.length}`);    
        
}
else {
    console.log("Enter Valid Input");
    
}
    //trim remove spaces b/w start and end from your input
    //split use to make array if we add b/w split anything then they remove that thing