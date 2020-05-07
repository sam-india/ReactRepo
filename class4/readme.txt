# React Forms

> Forms are essential for any application as forms allow user to interact with your application
> Forms can be use to take input from user for example: login / register

> we can keep the form data in the state and using on change event we can update
  State

# noValidate
  This is html 5 attribute we can use to indicate that the form is not to be
Validated on submit


# React and HTTP
# How to fetch data from API

React is all about send and managing data using props and state 
It has nothing to do with data coming from server or not
Component does not care whether data is coming from server or not
React does not has any fixed way of getting thr data from the api
We can use any library to make Ajax call to get data
> axios
> fetchapi

axios

webApplication--------> Http Call------------> server
(React).                (axios)

<--------------------------------<--------------- response


Get - > get the data or read the data
Post -> when we want send the data to the server

React component have several life cycle method

Mounting - when an instance of a component is being created and inserted in DOM
Updating - when a component is being re-rendered as a result 
Unmounting - when the component is being removed from the DOM
Error handling - When there is an error during rendering


# Get request

Steps
1. Install axios using nam
2. Create a component for posts
3. Create a state property for storing data
4. Import axios from 'axios' package
5. Use react component componentDidMount() life cycle method to make a call
6. Will receive promise so we can then and catch
7. Update the state using setState() 
8. Consume thr data in the component in render function


> npm install axios
  
Check ur package.json


# Styling React Components
1. Css stylesheet -> regular external style sheet
2. Inline css -> as a regular style define while writing html
3. CSS modules -> require react-script package > 2.0












