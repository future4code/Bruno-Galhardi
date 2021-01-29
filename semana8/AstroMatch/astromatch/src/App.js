import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PageHome from './components/PageHome/Index'
import PageMatch from './components/PageMatch/Index'

const ContainerApp = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    `
const BoxApp = styled.div`
    height:95vh;
    width:450px;
    border:1px solid black;
`

const ConteinerBtn = styled.div`
    height:60px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center; 
`

export default function App(){

  const  [changePage, setChangePage]= useState(true)

  const mudaPagina = () =>{
    setChangePage(!changePage)
  }



  return (
    
    <ContainerApp>
      <BoxApp>
        <ConteinerBtn>
          <button onClick={mudaPagina}>{changePage ? 'Matchs' : 'Home'}</button> 
        </ConteinerBtn>

        <hr></hr>
      
      
      {changePage ? <PageHome/> : <PageMatch/> }

      
      </BoxApp>
    </ContainerApp>
  );
  
  }
  
  
 

