import React, { Component } from 'react';

class Category extends Component {
    render() { 
        //const {cat} = this.props.category
        return ( 
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
        <h5 className="card-title">{this.props.category.catName}</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Category;