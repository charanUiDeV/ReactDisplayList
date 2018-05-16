import * as React from 'react';
import Person from '../src/components/persons';
import './App.css';




export default class App extends React.Component<{},{}>{
 
   
    public state={
       persons:[
       {id:111,name:'charan',age:27},
       {id:112,name:'chaitanya',age:26},
       {id:113,name:'raja',age:28}
       ],
       showPersons:false
    } 
  

    public deletePersonHandler=(PersonIndex:any)=>{    
      const persons = this.state.persons;
      persons.splice(PersonIndex,1);  
      this.setState({persons});    
    }
    
  // private switchHandler =(newName:any)=>{
  //   this.setState({
  //      persons:[
  //        {name:newName,age:28},
  //        {name:'chaitanya kumar',age:30},
  //        {name:'rajarshi yelamati', age:66}
  //      ]
  //   })
  // }

  public toggleHandler=()=>{
     const doesShow =this.state.showPersons;
     this.setState({showPersons:!doesShow})
    
  }

          // {two way binding}

  public onNameChangeHandler =(event:any)=>{
    this.setState({
      persons:[
        {name:'charan',age:26},
        {name:'chaitanya',age:30},
        {name:event.target.value, age:66}
      ]
   })
  }




   public render() {
     let persons =null;
        //  //outputting the lists from the state 
        // based on the condition
         
     if(this.state.showPersons){
       persons=(
           <div className="container-fluid"> 
              {this.state.persons.map((person,index)=>{
                return <div key={person.name}>
                          <Person  name ={person.name} age={person.age}/>
                          <button onClick={this.deletePersonHandler.bind(this,index)}>Delete</button>
                      </div>
              })}
              {        
                /*  look above for iterating the list from an array and displaying the data in the form of a list <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
              <Person clickProp ={this.switchHandler.bind(this,'charann')} name={this.state.persons[1].name} age={this.state.persons[1].age} />
              <Person changed={this.onNameChangeHandler} name={this.state.persons[2].name} age={this.state.persons[2].age}/> */}
           </div>
       );
     }

    return (
          <div className="App">
            <button onClick={this.toggleHandler}>Toggle Persons</button> 
            {persons}
          </div>
    );
  };

  
}

