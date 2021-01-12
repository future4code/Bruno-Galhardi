import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerUsuario = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #afe3dd;
  text-align: center;
  width: 65vw;
  height: 35vh;
  align-items: center;
`;


class FormUsuario extends React.Component {

    state = {
        inputValueNome:'',
        inputValueEmail:''

    }

    pegarValorNome = (e) =>{
        this.setState({inputValueNome: e.target.value})

    }
    pegarValorEmail = (e) =>{
        this.setState({inputValueEmail: e.target.value})

    }

        criarUsuario = () => {
        const body = {
          name: this.state.inputValueNome,
          email: this.state.inputValueEmail,
        };
      
        const request = axios.post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
          body,
          {
            headers: {
              Authorization: "bruno-vallim-epps",
            },
          }
        );
        request
          .then((resposta) => {
            alert("Usuário criado com sucesso!!!");
          })
          .catch((erro) => {
            alert("Erro ao criar Usuário");
          });
      };

  render() {
    return (
      <ContainerUsuario>
        <div>
          <label>Nome:</label>
          <input onChange={this.pegarValorNome}></input>
        </div>
        <div>
          <label>E-mail:</label>
          <input onChange={this.pegarValorEmail}></input>
        </div>
        <button onClick={this.criarUsuario}>Salvar Usuário</button>
      </ContainerUsuario>
    );
  }
}

export default FormUsuario;
