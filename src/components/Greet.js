import React from 'react';


// function Greet(){
//     return <h1>Hello Anurag</h1>
// }

// const Greet= (props)=>{
//     console.log('PROPS: ',props);
//     return (
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//             {props.children}
//         </div>
//     )
//     }

//1. destructuring using function params.
// const Greet= ({name, heroName})=>{
    
//     return (
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
//         </div>
//     )
//     }

const Greet= (props)=>{
    const {name,heroName}=props;
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {props.children}
        </div>
    )
    }


export default Greet;