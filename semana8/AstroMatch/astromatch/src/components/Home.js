import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Like from "../img/Like.png";
import Dislike from "../img/Dislike.png";
import TelaMatches from './TelaMatches';

const MainDiv = styled.div`
 width:100vw;
 height:100vh;
`;

const BoxProfiles = styled.div`
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

const ImgButtons = styled.img`
  height: 50px;
  width: 50px;
  padding:20px;
  padding-top:30px;
  
`;

const DivBtn = styled.div`
    display:flex;
    padding-top:100%;
    
    
`
const ImgPerfil = styled.img`
    height:85%;
    width:75%;
    align-items:center;
    
`

const BtnMatchs =styled.button`
    position: relative;
    z-index:-1;
    right: 1px;
`

export default function Home() {

    useEffect(() => {
        getProfileChoose();
      }, []);

    const [perfil, setPerfil] = useState({});
    

    const getProfileChoose = () =>{
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person')
        .then((response)=>{
            setPerfil(response.data.profile)
            console.log(perfil)
        })
        .catch((err)=>{
            console.log(err)
        })
        

    }
    
  return (
    <MainDiv>
        
      <BoxProfiles>

        <BtnMatchs>Matchs</BtnMatchs> 

        <h1>Astromatch</h1>

            
        

            <div>
                <ImgPerfil src={perfil.photo}/> 
            </div>

            <div>
                <p>{perfil.name}, {perfil.age}</p>
                <p>{perfil.bio}</p>

            </div>

        
       
        <DivBtn>
            
          <ImgButtons src={Dislike} />
          <ImgButtons src={Like} />
          
        </DivBtn>

      </BoxProfiles>

    </MainDiv>
  );
}
