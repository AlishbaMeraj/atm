#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let mypin = 4123;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter 4-Digit ATM pin",
        type: "number",
    },
]);
if (pinAnswer.pin === mypin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "what want to do",
            type: "list",
            choices: [
                "withdraw",
                "check balance ",
                "deposite",
                "pinchange",
                "transfer",
            ],
        },
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
            {
                name: "conformation",
                message: "this amount withdraw form your account (yes or no)",
                type: "string",
            },
        ]);
        myBalance -= amountAns.amount;
        console.log("your remaining balance is: " + myBalance);
    }
    if (operationAns.operation === "deposite") {
        let depositeAns = await inquirer.prompt([
            {
                name: "depositeamount",
                message: "enter your deposit amount",
                type: "number",
            },
            {
                name: "conformation",
                message: "this amount deposite form your account (yes or no)",
                type: "string",
            },
        ]);
        myBalance += depositeAns.depositeamount;
        console.log("your current balance is: " + myBalance);
    }
    ;
    if (operationAns.operation === "pinchange") {
        let pinchangeAns = await inquirer.prompt([
            {
                name: "oldpin",
                message: ["enter your old pin number"],
                option: ["select a number", 123456789],
                type: "number",
                validate: (inp) => {
                    return inp === mypin;
                },
            },
            {
                name: "pinchange",
                message: ["enter your new 4 - digit pin number"],
                option: ["select a number", 123456789],
                type: "number",
            },
            {
                name: "conformation",
                type: "string",
                choice: ["confirm", "no"],
            },
        ]);
        mypin = pinchangeAns.pinchange;
        console.log("your new pin is: " + mypin);
    }
    if (operationAns.operation === "transfer") {
        let transferAns = await inquirer.prompt([
            {
                name: "transferamount",
                message: "enter transfer amount",
                type: "number",
            },
            {
                name: "accountNumber",
                message: "enter account number",
                type: "number",
            },
            {
                name: "deductAmount",
                message: "this amount deduct form your account (yes or no)",
                type: "number",
            },
        ]);
        myBalance -= transferAns.transferamount;
        console.log("your current balance is: " + myBalance);
    }
    {
        myBalance = myBalance;
        console.log("your total balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect pin code!  Try Again!");
}
