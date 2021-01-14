import React from "react";
import axios from "axios";
import styled from "styled-components";

const BoxListaUsuario = styled.p`
  display:flex;
  align-items:center;
  justify-content:space-between;
  
`
const BtnDel = styled.button`
  margin-left: 15px;

`
const BoxUsuario = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #afe3dd;
  text-align: center;
  width: 65vw;
  height: 35vh;
  align-items: center;
`

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

  componentDidUpdate = () =>{
    this.getAllUsers()
  }

  DeletarUser = (userId) =>{
    const request = axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
      headers:{
        Authorization: 'bruno-vallim-epps'
      }
    }
    )
    request.then((resposta) =>{
      alert('Você removeu o usuário')
    })
    .catch((error) =>{
      alert('Erro ao remover o usuário')
    })
  }

  render() {

    const listaUsuarios = this.state.users.map((user)=>{
      return <BoxListaUsuario>

        {user.name}
        <BtnDel onClick ={() =>{this.DeletarUser(user.id)}}>X</BtnDel>

      </BoxListaUsuario>
    })

    return (
      <BoxUsuario>
        <h1>Lista Usuário</h1>
        <div>
          {listaUsuarios}
        </div>
      </BoxUsuario>
    );
  }
}

export default ListaUsuario;
