import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";



const MainDiv = styled.div`
 width:100vw;
 height:100vh;
`;

const ContainerMatches = styled.div`
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

const BoxMatchs = styled.div`
    display:flex;
    align-items:center;
    text-align:center;
    width:10vw;
    height:10vh;
    margin-right:0px;
    `

const ImgMatches = styled.img`
  width:80px;
  height:80px;
  margin-left:-70px;
  padding:10px;
  
`

const BtnDel = styled.button`
  display:flex;
  margin-top:175px;
  
`

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

      <ContainerMatches>
        <h2>Seus matches</h2>
        {Matchs.map((pessoa)=>{
          return(
            <BoxMatchs>
            <ImgMatches src={pessoa.photo}/>
            {pessoa.name}
            
            </BoxMatchs>
          ) 
            

        })}

        <BtnDel onClick={delMatch}>Limpar Matchs</BtnDel>

      </ContainerMatches>

      

    </MainDiv>
  );
}

