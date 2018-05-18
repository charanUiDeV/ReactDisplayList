import * as React from 'react';
import { CockPit } from '../components/cockpit/cockpit';
import Persons from '../components/persons/persons'
import './App.css';






export default class App extends React.Component<any,any>{
    constructor(props:any){
      super(props)
      // tslint:disable-next-line:no-console
     console.log("[App.js] inside the constructor", props);
     this.state={
         persons:[
         {id:'asad',name:'charan',age:27},
         {id:'dsfd',name:'chaitanya',age:26},
         {id:'asas',name:'raja',age:28}
         ],
            showPersons:false
          } 
    }

    public componentWillMount(){
      // tslint:disable-next-line:no-console
      console.log("[app.js] inside componwnt will mount")
    }
   public componentDidMount(){
      // tslint:disable-next-line:no-console
     console.log("[app.js] inside component did mount")
   }
    // public state={
    //    persons:[
    //    {id:'asad',name:'charan',age:27},
    //    {id:'dsfd',name:'chaitanya',age:26},
    //    {id:'asas',name:'raja',age:28}
    //    ],
    //    showPersons:false
    // } 
    public shouldComponentUpdate(nextProps:any,nextState:any){
      // tslint:disable-next-line:no-console
      console.log("[update app.js] inside shouldcomponentUpdate",nextState )
      return true;
    }

    public componentWillUpdate(nextProps:any,nextState:any){
       // tslint:disable-next-line:no-console
      console.log("[update app.js] inside componentWillUpdate",nextState)
      return true;
    }
    public deletePersonHandler=(PersonIndex:any)=>{    
     
      const persons = [...this.state.persons]
      persons.splice(PersonIndex,1);  
      this.setState({persons});    
    }
    

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
     
   // tslint:disable-next-line:no-console
    console.log("[app.js ] inside render method")
     let persons =null;
        //  //outputting the lists from the state 
        // based on the condition
         
     if(this.state.showPersons){
       persons=(
           <div className="container-fluid">  
               <Persons  persons={this.state.persons} onchanged={this.onNameChangeHandler} />
               <button onClick={this.deletePersonHandler}>delete</button>      
           </div>
       );
     }

    return (
          <div className="App">
           <CockPit apptitle="relevant users" clicked={this.toggleHandler}/>
            {persons}
          </div>
    );
  };

  
}

