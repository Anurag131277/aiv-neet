import React from 'react';
import Person from './Person';


function NameList(){
    const persons=[
        {
            id:1,
            name:"Bruce",
            skill: "React"
        },
        {
            id:2,
            name:"Clark",
            skill: "Java"
        },
        {
            id:3,
            name:"Barry",
            skill: "Angular"
        },
    ]

    const names=["Bruce","Diana","Clark","Diana"]
    const personList= persons.map(person=> <Person key={person.id} name={person.name} skill={person.skill}></Person>);
    const nameList = names.map((name,index)=> <h2 key={index}>{name}</h2>)
    return (
     <div>
         {nameList}
     </div>
    )
}

export default NameList;