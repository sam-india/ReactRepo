import React, { Component } from 'react';

class Employee extends Component {

    render() {
        return (<div>
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        </div>);
    }
}

export default Employee;