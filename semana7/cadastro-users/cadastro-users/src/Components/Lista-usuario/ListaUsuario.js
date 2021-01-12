import React from "react";
import axios from "axios";
import styled from "styled-components";



class ListaUsuario extends React.Component {
  state={
    users:[]
  }
  
  getAllUsers = () =>{
    const request = axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
    {
      headers: {
        Authorization: 'bruno-vallim-epps'
      }
    })
    request.then((resposta) => {
      this.setState({users: resposta.data})
      
      
    })
    .catch((error) =>{
      alert('Erro ao abrir a lista de usuários')
    })
  }

  componentDidMount = () =>{
    this.getAllUsers()
  }

  render() {

    const listaUsuarios = this.state.users.map((user)=>{
      return <p>{user.name}</p>
    })

    return (
      <div>
        <h1>Lista Usuário</h1>
        <div>
          {listaUsuarios}
        </div>
      </div>
    );
  }
}

export default ListaUsuario;
