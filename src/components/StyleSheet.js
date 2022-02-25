import React from 'react';

import '../styles/myStyles.css';

function StyleSheet(props){

    let classname= props.primary ? 'primary': '';

    return (
        <div>
            <h1 className={`${classname} font-xl`}>Custom styles</h1>
        </div>
    )

}


export default StyleSheet;