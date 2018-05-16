import * as React from 'react';
import './person.css';

// interface Props{
//     name:string;
//     age:string;
// }

 const Person: React.StatelessComponent<any> =(props)=>{
    
        return(
           <div className="person">
               <p onClick ={props.clickProp}>This is a person of <b>name</b>  {props.name} with <b>age</b>  {props.age}  </p>

               <input type="text" onChange={props.changed}/>
               </div>
        );
    
}

export default Person;