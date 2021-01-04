import './App.css';
import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2"
import Etapa3 from "./components/Etapa3"
import Final from "./components/Final"
import React from "react";

export default class App extends React.Component{
  render(){
    return (
      <div >
        <Etapa2/>
        <div>
          <button>Próxima etapa</button>
        </div>

      </div>
    );




  }
  

  
}


