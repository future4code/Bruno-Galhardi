import React from "react";
import axios from "axios";
import styled from "styled-components";
import { baseUrl, axiosConfig } from "./Parameters";
import AddMusica from "./Components/AddMusica";

const BtnDel = styled.button`
  background-color: white;
  margin: 15px;
  border: 2px solid black;
  border-radius: 8px;
  width: 2vw;
  color: red;
`;

const BtnCriar = styled.button`
  background-color: blue;
  color: white;
  width: 70px;
  height: 25px;
  margin-left: 5px;
  border-radius:5px;
`;

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  text-align: center;
  background-color:#1CB1A2;
`;

const BoxAddTrack = styled.div`
  border:2px solid black;
  width:60vw;
  height:35vh;

`


class App extends React.Component {
  state = {
    inputNamePlaylist: "",
    listaPlaylist: [],
    detailsPlaylist: [],
    inputTrackName: "",
    inputArtist: "",
    inputUrl: "",
    select:''
  };

  createPlaylist = () => {
    const body = { name: this.state.inputNamePlaylist };
    axios
      .post(baseUrl, body, axiosConfig)
      .then((res) => {
        alert("Playslist Criada com sucesso");
        this.getAllPlaylist();
        this.setState({ inputNamePlaylist: "" });
      })
      .catch((err) => {
        alert("Erro ao criar Playlist");
      });
  };

  pegarNomePlaylist = (e) => {
    this.setState({ inputNamePlaylist: e.target.value });
  };

  getAllPlaylist = () => {
    axios
      .get(baseUrl, axiosConfig)
      .then((res) => {
        this.setState({ listaPlaylist: res.data.result.list });
      })
      .catch((err) => {});
  };

  componentDidMount() {
    this.getAllPlaylist();
  }

  delPlaylist = (id) => {
    axios
      .delete(`${baseUrl}/${id}`, axiosConfig)
      .then((res) => {
        alert("Playlist deletada com sucesso!");
        this.getAllPlaylist();
      })
      .catch((err) => {
        alert("Erro ao deletar Playlist");
      });
  };

  detailsPlaylist = (id) => {
    axios
      .get(`${baseUrl}/${id}/tracks`, axiosConfig)
      .then((res) => {
        alert("Detalhes de sua playlist");
        

        this.setState({ detailsPlaylist: res.data.result.tracks });
        this.getAllPlaylist();
      })
      .catch((err) => {
        alert("Erro ao visualizar playlist!");
      });
  };

  addTrack = (e) => {
    const id = e.target.value
    const body = {
      name: this.state.inputTrackName,
      artist: this.state.inputArtist,
      url: this.state.inputUrl
    };
    axios
      .post(`${baseUrl}/${id}/tracks`, body, axiosConfig)
      .then((res) => {
        alert("Musica adicionada");
        this.setState({
          inputTrackName: "",
          inputArtist: "",
          inputUrl: ""
        })
        
      })
      .catch((err) => {
        alert("Erro ao criar musica");
        
      });
  };

  onChangeNameTrack = (e) => {
    this.setState({inputTrackName: e.target.value });
  };

  onChangeNameArtist = (e) => {
    this.setState({inputArtist: e.target.value });
  };

  onChangeNameUrl = (e) => {
    this.setState({inputUrl: e.target.value });
  };

  render() {
    const detailsrenders = this.state.detailsPlaylist.map((details) => {
      return (
        <div>
          <div>

          <p>Nome: {details.name}</p>
          <p>Artista:{details.artist}</p>
          <audio controls>
            <source src={details.url} type="audio/mpeg"></source>
          </audio>
          </div>

        </div>
      );
    });
    const listaRenderizada = this.state.listaPlaylist.map((playlist) => {
      return(
        <div>
          
          {playlist.name}
          <BtnDel onClick={() => {this.delPlaylist(playlist.id)}}>X</BtnDel>
          <button onClick={() => {this.detailsPlaylist(playlist.id);}}>Detalhes</button>
            
        </div>
      )
    });
    const addTrackRender = 
    <div>

      <label>Nome da musica:</label>
      <input onChange={this.onChangeNameTrack} value={this.state.inputTrackName}></input>
      <label>Artista:</label>
      <input onChange={this.onChangeNameArtist} value={this.state.inputArtist}></input>
      <label>URL da musica:</label>
      <input onChange={this.onChangeNameUrl} value={this.state.inputUrl}></input>
      <label>Adicionar na playlist:</label>
      <select onChange={this.addTrack}>
        <option></option>
        {this.state.listaPlaylist.map((playlist)=>{
          return (
            <option value={playlist.id}>{playlist.name}</option>
          )
        })}
      </select>
    
    </div>
      

      return (
         
          <Main>
            <div>
              <h1>Crie suas Playlist</h1>
              <label>Coloque o nome da sua Playlist:</label>
              <input
                onChange={this.pegarNomePlaylist}
                value={this.state.inputNamePlaylist}
              ></input>
              <BtnCriar onClick={this.createPlaylist}>Criar</BtnCriar>
            </div>
          
            <div>
    
              <h2>Lista de Playlist</h2>
    
              {listaRenderizada}
              
              {detailsrenders}

            </div>
            <BoxAddTrack>
              <h3>Adicionar música em sua Playlist</h3>
              {addTrackRender}
            </BoxAddTrack>
          </Main>
        );
      }
    }
  
   
    

export default App;
