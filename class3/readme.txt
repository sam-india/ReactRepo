# Props and State

> Props are use to share data between the component and they are immutable
> state are manage inside the component 


# setState
> It is react hook function use to work with state
> State is directly connected with the UI of the application
> When ever we upadte state value it will re render the UI


# Event Handling
There are 4 ways we can handle event

1. using bind() function

<button onClick={this.clickEventHandler.bind(this)}> Click </button>

clickEventHandler() {
      console.log(this);
      this.setState({
        message: "This is updated state",
      });
    }

2. using arrow function
<button onClick={() => this.clickEventHandler()}> Click </button>

3. using constructor

constructor() {
    super();
    this.state = {
      message: "This is state",
    };
    this.clickEventHandler = this.clickEventHandler.bind(this);
  }

<button onClick={this.clickEventHandler}> Click </button>


4. using arrow fucntion to define handler

clickEventHandler = () => {
    console.log(this);
    this.setState({
      message: "This is updated state",
    });
  };


<button onClick={this.clickEventHandler}> Click </button>



# Conditional Rendering content
Based on some condition we want to show or hide some content

if else

1.

 if (this.state.isLoggedIn) {
                 return <h2 > Welcome Mark < /h2>;
             } else {
                 return <h2 > Welcome Guest < /h2>;
             }
             return (
               <div>
                 <h2> Welcome Guest! </h2> <h2> Welcome Mark </h2>{" "}
               </div>
            );

2. 
let output;
        if (this.state.isLoggedIn) {
            output = < h2 > Welcome Mark < /h2>;
        } else {
            output = < h2 > Welcome Guest < /h2>;
        }

3. 
render() {
    return this.state.isLoggedIn ? (
      <h2> Welcome Mark </h2>
    ) : (
      <h2> Welcome Guest </h2>
    );
  }



4.

return this.state.isLoggedIn && < h2 > Welcome Mark < /h2>

or

 return (
      (this.state.isLoggedIn) && 
      (<h2> Welcome Mark </h2>) || 
      (<h2> Welcome Guest </h2>)
    );


# Loops or List
we can use map function of the javascript for iteration


> Functional component

function CityFunctionComponent() {
  const city = ["Delhi", "Mumbai", "Pune"];
  return (
    <div>
      {city.map((c) => (
        <h2> {c} </h2>
      ))}
    </div>
  );
}


> class component


class City extends Component {
  city = ["Delhi", "Mumbai", "Pune", "Pune", "Pune"];
  render() {
    return (
      <div>
        {/* <h2> {this.city[0]} </h2> <h2> {this.city[1]} </h2>
                            <h2> {this.city[2]} </h2> */}
        {this.city.map((c) => (
          <h2> {c} </h2>
        ))}
      </div>
    );
  }
}



EmployeeList -----> Employee
parent------------> Child

parent can send data to child complonent usign props

EmployeeList
return (
            <div>
                <table className='table table-bordered'>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                    {this.employees.map(
                        emp => <Employee data={emp} />
                    )}

                </table>
            </div>
        )


Employee
render() {
        return (<div>
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        </div>);
    }



destructuring


# key
> Every iterator must have a unique key otherwise u will get warning
> This key is used by react to uniquely identify your component or row
> React used key property for internal use and we cannot able tp access the value of key using props 
  if we are intered in getting the key value we have to pass using different prop
> key is a special attribute we need to include when we are creating a list
< Key attribute give unique identity to the eleemnt
> key help react to identity which item have changed or added or removed
> It help in unpading the UI effeciatly

> we can also use element index to specify key
 {this.employees.map(
                        (emp, index) => <Employee data={emp} key={index} id={index} />
                    )}


belala@hexaware.com









































 