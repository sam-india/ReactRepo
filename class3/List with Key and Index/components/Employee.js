import React, { Component } from 'react';

class Employee extends Component {

    render() {
        // const id = this.props.data.id;
        // const name = this.props.data.name;
        // const age = this.props.data.age;

        const { id, name, age } = this.props.data

        return (<div>
            {/* <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr> */}


            <tr>
                <td>{this.props.id}</td>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
            </tr>


        </div>);
    }
}

export default Employee;