const express = require('express');
const mysql = require('mysql2');
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employeeDB'
    },
    console.log(`Connected to the employeeDB.`)
  );
  

  function init(){
      initPrompt()
  }


  function initPrompt() {
    inquirer.prompt([{
      type: "list",
      name: "mainChoice",
      message: "What would like to do?",
      choices: ["View All Departments",
        "View All Roles",
        "View All Employees",
        "Add Department",
        "add a role",
        "add an employee",
        "update an employee role",
        "Quit"]
    }
]).then((clientPrompt) => {
    switch (clientPrompt.choice) {
      case "View All Departments": viewAllDept();
        break;
      case "add an employee": addEmp();
        break;
      case "update an employee role": updateRole();
        break;
      case "View All Roles": roleView();
        break;
      case "add a role": addRole();
        break;
      case "View All Employees": viewAll();
        break;
      case "Add Department": addDept();
        break;
      case "Quit": db.end();
        break;
      default:
        console.log("Oops, Something went wrong :(");
        break;

    }
  })

}
