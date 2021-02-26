import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import Router from './routes/Router'
import theme from './Constants/Theme'
import Header from './Components/Header';
import { BrowserRouter } from 'react-router-dom';



const App = () => {
  const token = localStorage.getItem('token')
  const [btnOut, setBtnOut] = useState(token ? 'Logout' : 'Login')

  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header btnOut={btnOut} setBtnOut={setBtnOut}/>
          <Router setBtnOut={setBtnOut}/>
        </BrowserRouter>
      </ThemeProvider>
    
  );
}

export default App;
