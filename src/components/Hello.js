//functional component
import React from 'react';


//JSX version of Hello Component
// const Hello = ()=>{
//     return (
//         <div className="myDummyClass" id="myNewId">
//             <h1>Hello Anurag 3 Functional Component</h1>
//         </div>
//     )
// }

// Hello Component without JSX

const Hello = ()=>{
    // return React.createElement('div',null,'<h1>Hello Anurag Child</h1>'); //wrong way
    return React.createElement('div',
    {id: 'myDiv', className: 'myClass'},//properties
    React.createElement('h1',null,'Hello Anurag Child')
    );
}


export default Hello;