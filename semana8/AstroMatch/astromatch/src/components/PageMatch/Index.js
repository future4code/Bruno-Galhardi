import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import PageHome from '../PageHome/Index';


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

export default function PageMatch() {

    
  useEffect(() => {
    getMatchs();
  }, []);


    const [Matchs, setMatchs] = useState([])

    const getMatchs = () =>{
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-vallim/matches')
        .then((response)=>{
            setMatchs(response.data.matches)
            console.log(Matchs)
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }

    const delMatch = () =>{
      axios
      .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-vallim/clear')
      .then((response)=>{
        alert('voce apagou seu amorzinho <3')
      })
      .catch((err)=>{
        alert('Erro ao apagar')
      })
    }

    

    

  return (

    <MainDiv>

      <BoxMatches>
        <h2>Todos matches</h2>
        {Matchs.map((pessoa)=>{
          return(
            <div>
            <img src={pessoa.photo}/>
            <p>{pessoa.name}</p>
            </div>
          ) 
            

        })}

        <button onClick={delMatch}>Clear</button>

      </BoxMatches>

      

    </MainDiv>
  );
}

