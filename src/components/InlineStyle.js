import React from 'react';

import styles from '../styles/newStyle.module.css'

const heading ={
    fontSize: '72px',
    color: 'blue',
    backgroundColor: 'red'
}

function InlineStyle(props){

    let classname= props.primary ? 'primary': '';

    return (
        <div>
            <h2 className={styles.success}>Success</h2>
            <h1 style={heading}>Inline styles</h1>
            <h2 className="error">Error 2</h2>
        </div>
    )

}


export default InlineStyle;