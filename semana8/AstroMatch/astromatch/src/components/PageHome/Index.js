import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import like from '../../img/Like.png'
import dislike from '../../img/Dislike.png'




const MainDiv = styled.div`

 height:78vh;
 text-align:center;

`;

const ContainerProfiles = styled.div`
  display: flex;
  border-radius:6px;
  flex-direction: column;
  text-align: center;
  height: 100%; 
  align-items: center;
  
  
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
    height:50vh;
    width:100%;
    align-items:center;
    display:flex;
    margin: auto;
   
    
`
const BtnLikes = styled.button`
  align-self:center;
  margin:10px;
  border:none;
  cursor: pointer;

  &:focus{
    outline:none;
  }
  `

  const BoxInfos = styled.div`
  height:100%;
  `

  const ImgBtn = styled.img`
    height:50px;
    width:50px;
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
            
        })
        .catch((err)=>{
            console.log(err)
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
              <BoxInfos>
                  <ImgPerfil src={perfil.photo}/> 
                  
                  <H3>{perfil.name}, {perfil.age}</H3>
                  
                  <TextoP>{perfil.bio}</TextoP>

                  
                          
            </BoxInfos>         
            }
                  
      </ContainerProfiles>
                  <BtnLikes onClick= {()=> choosePerson(false, perfil.id)}>
                    <ImgBtn src={dislike}/>
                    </BtnLikes>
                  <BtnLikes onClick= {()=> choosePerson(true, perfil.id)}>
                    <ImgBtn src={like}/>
                    </BtnLikes>
    </MainDiv>
  );
}
