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
  