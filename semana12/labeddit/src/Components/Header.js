import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './Styled'
import { goToPage } from '../routes/Coordinator';
import { useHistory } from 'react-router-dom';



const Header = ({btnOut, setBtnOut}) => {
   const history = useHistory()
   const token = localStorage.getItem('token')
   

   const logout = () =>{
     localStorage.removeItem('token')
   }
   
   const logoutBtn = () =>{
     if (token){
       logout()
       setBtnOut('Login')
       goToPage(history, '/login')
     } else{
      goToPage(history, '/login')
     }
   }
  return (   
      <AppBar position="static">
        <StyledToolbar>         
            <Button onClick={()=> goToPage(history,'/feed')} color="inherit">LabEddit</Button>           
            <Button onClick={logoutBtn} color="inherit">{btnOut}</Button>
        </StyledToolbar>
      </AppBar>    
  );
}
export default Header