import React from "react"
import axios from "axios"
import styled from "styled-components"
import { baseUrl, axiosConfig } from "./Parameters"

const BtnDel = styled.button`
  background-color:white;
  margin:15px;
  border: 2px solid black;
  border-radius:8px;
  width:2vw;
  color:red;

`
const BtnDetail = styled.button`
    margin:15px;

`

const BtnCriar = styled.button`
  background-color:blue;
  color:white;
  width:3vw;
  height:3vh;
  margin-left:5px;

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

  delPlaylist = (id) =>{
    axios.delete(`${baseUrl}/${id}`, axiosConfig)
    .then((res)=>{
      alert('Playlist deletada com sucesso!')
      this.getAllPlaylist()
    }).catch((err)=>{
      alert('Erro ao deletar Playlist')
    })
  }
 
 
  render(){
    const listaRenderizada = this.state.listaPlaylist.map((playlist)=>{
      
      return(
        <p>
          <BtnDetail>Playlist Detail</BtnDetail>
          {playlist.name} 
          <BtnDel onClick={()=> {this.delPlaylist(playlist.id)}}>X</BtnDel>
        </p>
        
        
      )
    })
  return (
    <div>
      <div>

        <h1>Crie suas Playlist</h1>
        <label>Coloque o nome da sua Playlist:</label>
        <input onChange={this.pegarNomePlaylist} value={this.state.inputNamePlaylist}></input>
        <BtnCriar onClick={this.createPlaylist}>Criar</BtnCriar>

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
