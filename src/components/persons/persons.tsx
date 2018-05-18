import * as React from 'react';

import Person from './person/person';

export const Persons =(props:any)=>props.persons.map((person:any,index:any)=>{

                      
               return(
               <div key={person.id}> 
                        <Person changed ={props.onchanged} name={person.name} age={person.age}/>                              
                </div>

               );
            

});

export default Persons;
