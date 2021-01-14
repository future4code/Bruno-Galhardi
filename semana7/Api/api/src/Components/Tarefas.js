import React from "react";
import styled from "styled-components";
import axios from "axios";

const BoxDiv = styled.div`
  background-color: #6dcecb;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const BtnTarefa = styled.button`
  background-color: #d985e8;
  border: 1px solid black;
  padding: 5px;
  width: 20vw;
  height: 3vh;
`;
const Paragrafo = styled.p`
  font-size: 25px;
`;

class Tarefas extends React.Component {
  state = {
    activity: "",
    type: "",
    participants: 0,
    price: "",
  };

  getActivity = () => {
    axios
      .get("https://www.boredapi.com/api/activity/")
      .then((res) => {
        this.setState({
          activity: res.data.activity,
          type: res.data.type,
          participants: res.data.participants,
          price: res.data.price,
          accessibility: res.data.accessibility,
          key: res.data.key,
        });
      })
      .catch((err) => {
        alert("Errado");
      });
  };

  render() {
    return (
      <BoxDiv>
        <h1>Está sem nada para fazer?</h1>
        <BtnTarefa onClick={this.getActivity}>Clique aqui!</BtnTarefa>
        <Paragrafo>Nova atividade: {this.state.activity}</Paragrafo>
        <Paragrafo>Tipo da atividade: {this.state.type}</Paragrafo>
        <Paragrafo>
          Número de participantes: {this.state.participants}
        </Paragrafo>
        <Paragrafo>
          Gasto para realizar a atividade: {this.state.price}
        </Paragrafo>
      </BoxDiv>
    );
  }
}

export default Tarefas;
