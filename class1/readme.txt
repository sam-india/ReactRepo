# React Js

What is ReactJS?
> OPen Source library for building user interface
> It is a framework it is a library
> Resposive and effecient Frontend for your application
> It is created and maintained by facebook
> It is huge community support
> One of most popular and prefered library to build rich UI
> Component based Architectre

Component based Architecture
> The idea is to divide the entire web page into smaller functional 
  components
> And these component are easy to manage and scale up


# Angular / ReactJs / VueJs
> Angular is a framework where as ReactJs is just a library


# Setup
> Node and Npm
> Text Editor - VS Code
> create-react-app package
   npm install <package name> -g
   npm install <package name>@<version> -g
   npm install <package name>@latest -g
   npm i <package name> -g

   // install create-react-app package globally
   npm i create-react-app -g

   // create new project
   create-react-app <project name>   

   // change directory
   cd <project name> 

   // start app
   npm start


# Folder Structure

> node_module - This is one of the biggest folder in the entire project and it contain all packages
                which we require while developing app
                It also contain all third party libraries

> public - It contain all assests of the application and It also contain index.html 
           which the only html page which finally serve on the browser

> src - main source folder which contain all the source code of your application
        App.js, App.cs, Index.js

> .gitignore - this file is mostly used by your version control System like git and if we want to 
              skip any file and folder while publishing the source code we can metion that file or
              folder name in this file

> package-lock.json - This file get generated automatically when we perform any operation with npm to keep
                      the track of npm 

> package.json - It contain various meta data your application. It provide information to npm
                 about project dependencies

> Readme.md - It is use to provide some kind of documentation



> npm start



# Project Files

> index.js -> entry point of the react app
> App.Js -> root component
> App.css -> style sheet for app component


index.html -> <div id="root"> -> index.js -> find root -> App.js


# Create component

Steps
1. Create components folder in src (optional)
2. Create new file with .js extension
3. import React,Component from 'react' module
	import React, { Component } from 'react';

4. create a class which extend from Component Class
	class <ClassName> extends Component {}  

5. We need to export default <CLassName> so that we can import
   this class in other files

6. React component will have render function and this render function
   will return the html or content we want to display
   we can use JSX(Javascript Extension) which allows you to write 
   java script code like html


	return <h1>Hello World</h1>
       this is jsx expression not a string

	jsx is html like syntex used by react that exends ECMAScript
       which allow you to write javascript code look like html

 

# ES6 (EcmaScript)
ES6 stands for ECMAScript 6
ECMAScript was published in 2015 which introduce some new features in Javascript

> classes
> Arrow fucntions
> var (let and constant)

ES6 which introduces classes concept in javascript


> Let / Const
> Object
> this
> Arrow Function
> Destructuring
> Spread operator
> classes
> Module

# Declaring a variable in javascript
var - keyword to declare a varible
let
const

let is use to declare a variable and let restrict the scope of the variable
limited to that block where we have declared a variable

example:
function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}

test();



const - means constant which value can be changed

example:
const a = 10;
console.log(a);
a = 20;
console.log(a);



# Object

const student = {
    name: 'Mark',
    roll: 10,
    running: function() {},
    sleep() { console.log('sleeping...') }
}

console.log(student.name);
console.log(student.roll);
console.log(student['name']);
console.log(student.sleep())

student.sleep = fucntion reference
student.sleep()


student.name = "Smith";
console.log(student.name);


# this

const employee = {
    firstName: 'Mark',
    lastName: "Smith",
    display() {
        console.log(this);
    }
}

employee.display();

const display2 = employee.display;
display2();


this does not work exactly same as it work in other programming langugage
when we use this inside an object it return that object
but when we use this outside the object it will return window global object or undefined

to solve this issue we can use bind fucntion the bind the scope with this keyword

const employee = {
    firstName: 'Mark',
    lastName: "Smith",
    display() {
        console.log(this);
    }
}

employee.display();

const display = employee.display.bind(employee)
display();


# Arrow Function
  Is new way of declaring fucntion using => 

const total = function(number) {
    return number + number;
}

const result = (number) => {
    return number + number;
}

const result2 = (number) => number + number

const addNumber = (num1, num2) => console.log(num1 + num2);

const square = number => number * number

const sq = () => console.log("hello") ;

// const employee = {
//     display() {
//         setTimeout(function() {
//             console.log("time out");
//         }, 5000)
//     }
// };


const employee = {
    display() {
        //var self = this
        setTimeout(() => {
            console.log('this', this);
        }, 1000)
    }
};

employee.display();

Handling this is also different in arraow function compare to regular function
these no binding of this in arrow function

In arrow function this keyword always represent the object that define the arrow function


# object Destructure

const employee = {
    firstName: 'Mark',
    lastName: 'Smith',
    email: 'm@gmail.com',
    phone: 99999
}

// const firstName = employee.firstName;
// const lastName = employee.lastName;
// const email = employee.email;
// const phone = employee.phone;

//const { firstName, lastName, email, phone } = employee;
const { firstName: f, lastName } = employee

//console.log(firstName)
console.log(f)


# Spread Operator
const first = [1, 2, 3, 4, 5, 6];
const second = [4, 5, 6, 7, 8, 9];

const combined = first.concat(second);


const combined2 = [...first, 'a', ...second, 'b'];

console.log(combined2);

const name = { firstName: 'Mark', lastName: 'Smith' };
const address = { house: '101', city: 'Chennai', country: 'India' }

const person = {...name, ...address, location: 'location 1' }

console.log(person);


# Classes

class Employee {
    id;
    name;
    email;

    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    display() {
        console.log('Name =' + this.name)
    }
}

const emp = new Employee(1, 'Mark', 'm@gmail.com');
emp.display();


# Inheritance

class Employee {
    firstName;
    lastName;

    constructor(f, l) {
        this.firstName = f;
        this.lastName = l;
    }

    fullName() {
        console.log(this.firstName + " " + this.lastName);
    }
}

class FullTimeEmployee extends Employee {
    salary;

    constructor(f, l, s) {
        super(f, l);
        this.salary = s;
    }
}


const fte = new FullTimeEmployee('Mark', 'Smith', 5000);
fte.fullName();


# Modules

each .js page you can consider as module
any class declared in one .js file is not visible or accessable in other modules
by default all module are private


# When we have multiple class or member where am using export keyword
  to make them visible outsite the module then we can use
  import { member1, member2 } from './modulePath'

# we can default alomg with export which make that member by default visible
  when use import
  import <member> from './modulePath'


example:

// employee.js
 function display() {

 }

 function print() {}

 export default class Employee {
     firstName;
     lastName;

     constructor(f, l) {
         this.firstName = f;
         this.lastName = l;
     }

     fullName() {
         console.log(this.firstName + " " + this.lastName);
     }
 };


// fullTimeEmployee.js
import Employee from './employee'

export class FullTimeEmployee extends Employee {
    salary;

    constructor(f, l, s) {
        super(f, l);
        this.salary = s;
    }
}

// index.js
import { FullTimeEmployee } from './fullTimeEmployee';

const fte = new FullTimeEmployee('Mark', 'Smith', 5000);
fte.fullName();
