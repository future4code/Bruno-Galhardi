import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Home from './Home'

const MainDiv = styled.div`
 width:100vw;
 height:100vh;
`;

const BoxMatches = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius:5px;
  flex-direction: column;
  text-align: center;
  height: 60%;
  width: 20%;
  align-items: center;
  margin-left: 40%;
  margin-top: 10%;
  
`;

export default function TelaMatches() {

    useEffect(() => {
        getMatchs();
      }, []);


    const [Matchs, setMatchs] = useState({})

    const getMatchs = () =>{
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches')
        .then((response)=>{
            setMatchs(response.data.matches)
            console.log(Matchs)
        })
        .catch((err)=>{
            console.log(err)
        })
        

    }

  return (

    <MainDiv>

      <BoxMatches>
        <h2>Todos matches</h2>

      </BoxMatches>

    </MainDiv>
  );
}