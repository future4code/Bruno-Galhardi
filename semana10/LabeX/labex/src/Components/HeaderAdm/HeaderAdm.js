import React from "react";
import '../Header/Header.css'
import {goToPage} from '../../routes/Coordinator'
import { useHistory, useParams } from 'react-router-dom'

const Header = () => {
  const history = useHistory()

  const logout = () =>{
      localStorage.removeItem('token')
      goToPage(history, '/')
  }

  return (
    <div className='mainContainer'>
      <div className='logo'>
        <h1 className='logoBtn' onClick={() => goToPage(history, "/" )}>LabeX</h1>
      </div>

      <div className='btnNav'>
        
        <button onClick={() => goToPage(history, "/trips/list" )}>Viagens</button>
        {/* <button onClick={() => goToPage(history, "/trips/details" )}>Detalhes das viagens</button> */}
        <button onClick={() => goToPage(history, "/trips/create" )}>Criar viagens</button>
        <button onClick={logout}>Logout</button>
        
      </div>
      
    </div>
  );
};

export default Header;