import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
    state ={
         persons:[
             {name:'Wai Hyn Htun',id:'111',age:'12'},
             {name:'Sai Sai',id:'123',age:'11'},
             {name:'Kaung Kaung',id:'233',age:'11'}
         ],
         togglePerson:false
    };

    togglePersonHandler = () => {
          this.setState({togglePerson:!this.state.togglePerson});
    }

    changeNameByinputHandler = (event,id) =>{
            let personIndex = this.state.persons.findIndex(p=>{
                    return p.id===id;
            });

            let persons = [...this.state.persons];


            let person = persons[personIndex];


            person.name = event.target.value;

            let clone = {...this.state.persons};

            clone[personIndex] =person;

            this.setState({persons,persons});         

    }

    render(){
          return (
            <div className="App">
                   <button onClick={this.togglePersonHandler}>Toggle</button>
                   {
                      (this.state.togglePerson)?
                       this.state.persons.map(person=>{
                              return <Person name={person.name} age={person.age} key={person.id}
                              input={(event)=>this.changeNameByinputHandler(event,person.id)}
                              />;
                       })
                      :null
                   }
            </div>
          );
    }
}

export default App;
