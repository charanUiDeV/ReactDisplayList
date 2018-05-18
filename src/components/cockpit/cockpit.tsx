import * as React from 'react';



  
export const CockPit =(props:any)=>{

    return(
        <div>

              <h1>React application- Lists</h1>
              <p>this is an example</p>
              <p>{props.apptitle}</p>
              <button onClick={props.clicked}>Toggle Persons</button> 
            </div>
    );

}
 


export default CockPit;