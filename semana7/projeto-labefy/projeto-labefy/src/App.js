import React from "react"
import axios from "axios"
import styled from "styled-components"
import { baseUrl, axiosConfig } from "./Parameters"

const BtnDel = styled.button`
  background-color:white;
  margin:15px;
  border: 2px solid black;
  border-radius:8px;
  width:5vw;
  color:red;

`
const BtnDetail = styled.button`
    margin:15px;

`
 
class App extends React.Component{
  state={
    inputNamePlaylist:'',
    listaPlaylist:[]
  }

  createPlaylist = () =>{
    const body = {name:this.state.inputNamePlaylist}
    axios.post(baseUrl,body, axiosConfig)
    .then((res)=>{
      alert('Playslist Criada com sucesso')
      this.getAllPlaylist()
      this.setState({inputNamePlaylist:''})
    })
    .catch((err)=>{
      alert('Erro ao criar Playlist')
    })

  }
  
 
  pegarNomePlaylist =(e) =>{
    this.setState({inputNamePlaylist: e.target.value})
  }

  getAllPlaylist = () =>{

    axios.get(baseUrl, axiosConfig)
    .then((res)=>{
      this.setState({listaPlaylist: res.data.result.list})
    })
    .catch((err)=>{
    })
    
  }

  componentDidMount (){
    this.getAllPlaylist()
  }

  
 
 
  render(){
    const listaRenderizada = this.state.listaPlaylist.map((playlist)=>{
      return(
        <p>
          <BtnDetail>Playlist Detail</BtnDetail>
          {playlist.name} 
          <BtnDel>X</BtnDel>
        </p>
        
        
      )
    })
  return (
    <div>
      <div>

        <h1>Crie suas Playlist</h1>
        <label>Coloque o nome da sua Playlist:</label>
        <input onChange={this.pegarNomePlaylist} value={this.state.inputNamePlaylist}></input>
        <button onClick={this.createPlaylist}>Criar</button>

      </div>
        

      <div>

        <h2>Lista de Playlist</h2>
        
        {listaRenderizada}
        

      </div>

    </div>
  );
 }
}
  


export default App;