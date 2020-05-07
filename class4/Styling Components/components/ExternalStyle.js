import React, { Component } from 'react';
import '../external.css';
import styles from '../styleModule.module.css'

class ExternalStyle extends Component {
    render() { 
        const customStyle = {
            fontSize: '50px',
            color: 'red'
        }
    
        let style = this.props.text ? 'text-success' : 'text-danger';
        return ( 
            <div>
                <h1 className={`${style} text-special`}>Some Heading</h1>

                <h1 style={customStyle}>Some Other Heading</h1>

                <h1 className={styles.textDanger}>Some more heading</h1>
            </div>
         );
    }
}
 
export default ExternalStyle;