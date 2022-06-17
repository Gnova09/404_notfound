import React,{Component} from 'react';
import './App.css';
import Notfound from '../componentes/404notfound/notfound';

class App extends Component {

  constructor(){
    super()
    this.state = { //lo que puede cambiar y pasar a los componentes
      pagefound: true
    }
  }
  render(){
    return (
      <div className="App">
        <Notfound /> 
      </div>
    );
  }
}
  

export default App;
