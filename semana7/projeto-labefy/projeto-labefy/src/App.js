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
  width: 3vw;
  height: 3vh;
  margin-left: 5px;
`;

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  text-align: center;
`;

class App extends React.Component {
  state = {
    inputNamePlaylist: "",
    listaPlaylist: [],
    detailsPlaylist: [],
    inputName: "",
    inputArtist: "",
    inputUrl: "",
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
        //alert("Detalhes de sua playlist");
        console.log(res);

        this.setState({ detailsPlaylist: res.data.result.tracks });
        this.getAllPlaylist();
      })
      .catch((err) => {
        alert("Erro ao visualizar playlist!");
      });
  };

  addTrack = (id) => {
    const body = {
      name: this.state.inputTrackName,
      artist: this.state.inputArtist,
      url: this.state.inputUrl
    };
    axios
      .post(`${baseUrl}/${id}/tracks`, body, axiosConfig)
      .then((res) => {
        alert("Musica adicionada");
        console.log(res);
        return res;
      })
      .catch((err) => {
        //alert("Erro ao criar musica");
        console.log(err.message);
      });
  };

  pegarNomeTrack = (e) => {
    this.setState({ inputTrackName: e.target.value });
  };

  pegarNomeArtist = (e) => {
    this.setState({ inputArtist: e.target.value });
  };

  pegarNomeUrl = (e) => {
    this.setState({ inputUrl: e.target.value });
  };

  render() {
    const detailsrenders = this.state.detailsPlaylist.map((details) => {
      return (
        <div>
          <p>Nome: {details.name}</p>
          <p>Artista:{details.artist}</p>
          <p>URL:{details.url}</p>
        </div>
      );
    });
    const listaRenderizada = this.state.listaPlaylist.map((playlist) => {
      console.log(playlist);

      return (
        <div key={playlist.id}>
          <div>
            <AddMusica />
            <button onClick={()=>{
              this.addTrack(playlist.id)
            }}>Criar</button>
          </div>

          {playlist.name}
          <BtnDel
            onClick={() => {
              this.delPlaylist(playlist.id);
            }}
          >
            X
          </BtnDel>

          <button
            onClick={() => {
              this.detailsPlaylist(playlist.id);
            }}
          >
            Detalhes playlist
          </button>
        </div>
      );
    });
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
      </Main>
    );
  }
}

export default App;
