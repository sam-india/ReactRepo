"Redux is predictable state container for javascript application"

It is for javascript application
It is a state container
It is predictable


# What is Redux?
> Redux is a library which is used widely for front end development
> It can be use in any javascript based framework like angular, react, vuejs and we can use even with vanilla javascript
> It is a tool for managing both data and state in any javascript application

# Why to use Redux?
> In our application we mostly managing some kind of data which may be change or modified by some component
> Mostly in react data flow from parent component to child component which make it
Unidirectional


# Principle of Redux
1. Single source of Truth
2. State is read only
3. Changes are made with pure function

1. Single source of Truth
The state of the entire application is stored in one single object. The single state tree make it easier to keep the track of the changes over the time. For fast development cycle it help to persist the application state in development

2. State is read only
The only way to change the state is to trigger the action. An action is a plain js object
Describing the changes, Just like the state is the minimal representation of data the action is the minimal representation of the changes to that data
An action just have a type property by convention it shuold be string constant

3. Changes are made with pure function
In order to specify how the state tree is transformed by action you need pure function
These pure function are those whose return value depend solely on the value of their arguments



# Advantages
> Predicatablity of the outcome
Since there is always one source of truth, ie the store there is no confusion about how to sync the current state with action and other part of the application

> Maintainability - the code become easy to manage
> Community support - there is huge community behind redux library
> Organisation - redux is very precise about how the code should be organised


# Component of redux
1. Action
2. Reducer
3. Store
4. View

1. Action - the only way to change state content is by emitting an action
Action are plain javascript object which are the main source of information used to send
Data

2. Reducer - Action describe the fact that something happened but does not specify how the application state change in response

3. Store- A store is javascript object which can hold the application state and provide few helpers to access the state



Use case

Book Seller.        Customer


Shop -> store -> hold the state of your application
Intention is to buy a book ---> Action ---> describe what happened
Shopkeeper ----> reducer.  -> store and action



Action
The only way our application can interact with the store
Carry some information from your app to the redux store
Plain javascript object
It must have type property that indicates the type of action being performed
The type property is typically defined as string constant


Reducer
Specify how the app state changes in response to action send to the store
Function that accept state and action as argument and return the next state of the application

(Previousstate, action) => newState


Store
One store for the entire application
To hold application state
Acclow accès to state vie getState()
Allow state to be update vie dispatch(action)
Register listener vie subscribe()



> npm install redux
> npm install react-redux


# Initial setup
> create-react-app myApp.  // to create a react application
> npm install redux
> npm install react-redux







https://github.com/thevarungupta1/react-redux-demo.git












