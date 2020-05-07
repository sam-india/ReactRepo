# ReactJs

# Introduction to React
# Comparison ReactJs vs Angular
# Enviornment Setup
# Understand Project Structured
# ES6
# Basic Syntex


# Components
> Components are the main building block for the Application
> Components are indepedent and resuable bits of code
> We can style these component indiviually

# Type of Components
1. Class Components - Statefull Components
2. Functional Components - Stateless Component

State means a component manages some data which may change while executing
the app and we need to update UI on change of data


# Nesting of the component

# Install Bootstrap
1. add the bootstrap CDN link in index.html
2. add bootstrap as dependency using npm 
   // make sure you are in project directory before executing npm command
   > npm i bootstrap
   > npm i bootstrap@latest
   > npm i bootstrap@4.4.1


# How to create functional Component
To create a functional component we dont have to create a class
we can create functional component either using traditional way of creating  function
or we can create a fucntion using arrow function


# Props
# State

# Props
> Props means properties when we want to send some data from parent 
  component to child we can use props
> The main difference between props and state is that props are
  immutable means the value of props cannot be changed
> Props can be use as an argument passed into react components
> We can pass props as argument to the component using HTML 
  attributes

  for example:
  <Test />  -> test component
  <Test myData="Hello" />

  <Item productName="Mobile" productImage="url"/>


# State

# State Vs Props

Props -> 1. props are use to get passed to the component as argument
	 2. Function parameters
	 3. props are immutable as we canot change the value
	 4. Functional Component -> props
	    Class Component -> this.props



State -> 1. state is something or some data which is managed privately inside the component
	 2. Variables declared in the function body
         3. State can be changed
         4. Functional Component ->  useState Hook 
	    Class COmponent -> this.state







 























