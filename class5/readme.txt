# React

# Fragments
# Component Life Cycle
# Routing
# Redux
# Mini Project


# Fragments

# Mini Project
> create new project using create-react-app
> install bootstrap
> create all require components
> add all components in App components


# Routing
> npm I react-router-dom



<Navbar />
      <Header />
      <div className="row">
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-9">
          <CategoryList />
          <ProductList />
        </div>
      </div>
      <Footer />


Steps:
1. Install react-router-dom using npm
2. In the index.js wrap app component with <BrowserRouter>
3. App Component add all <Routes> and set path and component
4. In Navbar we can replace <a> with <Link> and href with to in order to avoid refreshing the entire web page


There are way we can define routes so that it will not render all other components

> exact
> switch


# Router parameters

http://localhost:3000/products/catId/catName
http://localhost:3000/products?catId=1&catName=veg


# Component Lifecycle Methods

1. Mounting - when the instance of the component get created and inserted in the DOM
2. Updating - when a component is being re rendered based on the result when we changed 
              either props or state
3. Unmounting - when a component is being removed from the DOM
4. Error Handling - When there is any error during rendering of the component




Mounting - constructor, 
           getDerivedStateFromProps(), 
           render() 
           ComponentDidMount()

Updating - getDerivedStateFromProps(), 
           ShouldComponentUpdate(), 
            render(), 
            getSnapShotBeforeUpdate()
            ComponentDidUpdate()

Unmounting - ComponentWillUnMount()

ErrorHandling - getDerivedStateFromError()
                ComponentDidCatch()




# Mounting - when the instance of the component created and inserted in the DOM
# constructor -
> Constructor are special function which will get called automatically whenever we
   Create the instance of the component
> Mainly use to initialise the state
> we can also use constructor for event binding
> from constructor we can access the base class constructor using super()
> we should not make any http request in the constructor

# getDerivedStateFromProps(props, state)
> this is a static function and we cannot able to access this keyword in a static function
> this function can not be use to setState
> We cannot use this function to make any HTTP call

# render()
> this is only mandatory method we require for creating a compony
> read props and state
> this is the function which return JSX
> this is the function which cannot change the state and interact with the DOM
> We cannot be make HTTP call in this function
> From this method children component lifecycle method also executed

# ComponentDidMount()
> that invoke immediately after a component and all its children component get rendered
  In the DOM
> This method is considered as safe tom perform any http request to load data 



# Updating Life Cycle Methods
# getSerivedStateFromProps(props, state)
> static method
> Method is called every time a component is re-renederd
> When ever we update the state or props component get re rendered and this method will
  Call every time
> setState
> We cannot use this method to make any HTTP request

# shouldComponentUpdate(nextProps, nextState)
> this method will decide whether component should re render or not
> We can use this for performance optimisation
> cannot be use to make HTTP call , setState() can't be use

# Render()
> mandatory method for component
> read props and state and return JSX
> not to be considered to make any HTTP request

# getSnapShotBeforeUpdate(preProp, prevState)
> Called right before the changes from the virtual Dom are to be reflected in the DOM
> it can be use to get some DOM related information
> method either return null to value

# ComponentDidUpdate()
> this method will be called after the render is finished





Grocery App Project url:- 

https://github.com/thevarungupta1/grocery-app-react







