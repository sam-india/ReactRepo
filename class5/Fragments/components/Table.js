import React, { Component } from 'react';
import Column from './Column';

class Table extends Component {
    state = {  }
    render() { 
        return ( 
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Column />
                    </tr>
                </tbody>
            </table>
         );
    }
}
 
export default Table;