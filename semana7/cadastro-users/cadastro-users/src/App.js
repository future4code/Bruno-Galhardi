import React from "react";
import axios from "axios";
import styled from "styled-components";
import ListaUsuario from "./Components/Lista-usuario/ListaUsuario";
import FormUsuario from "./Components/FormUsuario/FormUsuario";

const BoxForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: columns;
`;


const ContainerApp = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;


`
class App extends React.Component {
  state = {
    aparecerLista: false,
  };

  mudarPagina = () => {
    this.setState({ aparecerLista: !this.state.aparecerLista });
  };

  render() {
    return (
      <ContainerApp>
        <BoxForm>
          {this.state.aparecerLista ? <ListaUsuario /> : <FormUsuario />}
        </BoxForm>
        <button onClick={this.mudarPagina}>
          {this.state.aparecerLista ? "Ir para Cadastro" : "Ir para Lista Usuário"}
        </button>
      </ContainerApp>
    );
  }
}

export default App;
