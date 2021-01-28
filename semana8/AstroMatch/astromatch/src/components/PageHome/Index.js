import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";



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
  height: 62%;
  width: 22%;
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
    height:60%;
    width:60%;
    align-items:center;
   
    
`

const BtnMatchs =styled.button`
    position: relative;
    z-index:-1;
    right: 1px;
`
const BoxImgPerfil = styled.div`
    width:75%;
    height:75%;
`

export default function PageHome() {

    useEffect(() => {
        getProfileChoose();
      }, []);

    const [perfil, setPerfil] = useState({});
    

    const getProfileChoose = () =>{
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person')
        .then((response)=>{
            setPerfil(response.data.profile)
            //console.log(perfil)
        })
        .catch((err)=>{
            //console.log(err)
        })
        

    }

    useEffect(() => {
      choosePerson();
    }, []);

    
    const [pegaPessoa, setPegaPessoa] = useState({});
    const [pegaId, setPegaId] = useState('')
    const [pegaChoice, setPegaChoice] = useState(true)

    const choosePerson = (id) =>{
      const body = {
        "id": `${setPegaId}`,
	      "choice": true
      }
      axios
      .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno/choose-person',body)
      .then((response)=>{
        getProfileChoose()
        console.log(response)
      })
      .catch((err)=>{
        console.log('Erro ao escolher',err)
      })
    }
    
  return (
    <MainDiv>
        
      <BoxProfiles>

        <BtnMatchs>Matchs</BtnMatchs> 

        <h1>Astromatch</h1>

            
        

            <BoxImgPerfil>
                <ImgPerfil src={perfil.photo}/> 
            </BoxImgPerfil>

            <div>
                <p>{perfil.name}, {perfil.age}</p>
                <p>{perfil.bio}</p>

                <button>Dislike</button>
                <button onClick= {choosePerson}>Like</button>
                

            </div>

          
            
          {/* <ImgButtons src={Dislike} />
          <ImgButtons src={like} />  */}
          
        

      </BoxProfiles>

    </MainDiv>
  );
}
