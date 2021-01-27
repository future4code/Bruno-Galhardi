import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Home from './components/Home'
import TelaMatches from './components/TelaMatches'

export default function App(){
  return (
    <div>
      <div>
        <Home/>
      </div>

      <div>
        <TelaMatches/>
      </div>



    </div>
  );
  
  }
  
  
 

