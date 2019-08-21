import React from 'react';
import './Person.css';

const person = (prop) => {
       return (
             <div className="Person">
                  <p>{prop.name}</p>
                  <p>{prop.age}</p>
                  <input type="text" onKeyDown={prop.input}/>
             </div>
       );
}


export default person;