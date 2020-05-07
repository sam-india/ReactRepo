import React, { Component } from 'react';
import Employee from './Employee';

class EmployeeList extends Component {
    employees = [{
        id: 1,
        name: 'Mark',
        salary: 5000,
        age: 30
    },
    {
        id: 2,
        name: 'Smith',
        salary: 6000,
        age: 32
    },
    {
        id: 3,
        name: 'Paul',
        salary: 7000,
        age: 28
    }
    ];
    render() {
        // return (<div > {
        //     this.employees.map(e => <h1> Id: {e.id}, Name: {e.name}, Age : {e.age} </h1>)}
        // </div >
        // );
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

    }
}

export default EmployeeList;