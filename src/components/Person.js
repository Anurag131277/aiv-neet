import React from 'react';

function Person({name,skill}){
    return (
        <div>
            <p>Hi!, I am {name}, and I have {skill}</p>
        </div>
    )
}

export default Person;