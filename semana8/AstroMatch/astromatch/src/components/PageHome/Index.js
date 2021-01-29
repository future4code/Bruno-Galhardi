import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";




const MainDiv = styled.div`
 width:100vw;
 height:100vh;
 background-color:#f0fff0;
`;

const ContainerProfiles = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius:6px;
  flex-direction: column;
  text-align: center;
  height: 63%;
  width: 22%;
  align-items: center;
  margin-left: 40%;
  margin-top: 10%;
  
`;

const H3 = styled.h3`
  text-align:left;
  margin-left: 20px;
`  

const TextoP = styled.p`
  text-align:left;
  margin-left: 20px;
`
  
const ImgPerfil = styled.img`
    height:35vh;
    width:18vw;
    align-items:center;
    display:flex;
    margin: auto;
   
    
`
const BtnLikes = styled.button`
  align-self:center;
  margin:10px;
  width:3vw;
  height:3vh;
  border-radius:15px;
  
  
  
  `

export default function PageHome() {

    useEffect(() => {
        getProfileChoose();
      }, []);

    const [perfil, setPerfil] = useState({});
    

    const getProfileChoose = () =>{
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-vallim/person')
        .then((response)=>{
            setPerfil(response.data.profile)
            //console.log(perfil)
        })
        .catch((err)=>{
            //console.log(err)
        })
        

    }

     useEffect(() => {
      if(perfil === false){
        getProfileChoose()
      };
    }, [perfil]);


    const choosePerson = (value,id) =>{
      const body = {
        id: id,
	      choice: value
      }
      axios
      .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno-vallim/choose-person',body)
      .then((response)=>{
        getProfileChoose()
        if(response.data.isMatch === true){
          alert('Deu match')
        }
      })
      .catch((err)=>{
        console.log('Erro ao escolher',err)
      })
    }
    
  return (
    <MainDiv>
        
      <ContainerProfiles>

        <h1>Astromatch</h1>
                 
            {perfil && 
              <div>
                  <ImgPerfil src={perfil.photo}/> 
                  <hr></hr>
                  <H3>{perfil.name}, {perfil.age}</H3>
                  
                  <TextoP>{perfil.bio}</TextoP>

                  <BtnLikes onClick= {()=> choosePerson(false, perfil.id)}>X</BtnLikes>
                  <BtnLikes onClick= {()=> choosePerson(true, perfil.id)}>♥</BtnLikes>
                          
            </div>         
            }
                  
      </ContainerProfiles>

    </MainDiv>
  );
}
