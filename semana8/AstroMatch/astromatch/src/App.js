import React, { useState, useEffect } from 'react'
//import axios from 'axios'
import styled from 'styled-components'
import PageHome from './components/PageHome/Index'
import PageMatch from './components/PageMatch/Index'

export default function App(){

  const  [changePage, setChangePage]= useState(true)

  const mudaPagina = () =>{
    setChangePage(!changePage)
  }

const ContainerApp = styled.div`
    width:30vw;
    height:95vh;



`


  return (
    <ContainerApp>
      <button onClick={mudaPagina}>Home</button>
      {changePage ? <PageHome/> : <PageMatch/> }

    {/*   <div>
        <PageHome/>
      </div>

        <div>
        <PageMatch/>
      </div> */} 
      


    </ContainerApp>
  );
  
  }
  
  
 

