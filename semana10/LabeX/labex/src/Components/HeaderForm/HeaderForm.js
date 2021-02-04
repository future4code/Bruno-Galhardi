import React from "react";
import '../HeaderForm/HeaderForm.css'
import {goToPage} from '../../routes/Coordinator'
import { useHistory, useParams } from 'react-router-dom'


const HeaderForm = () => {
  const history = useHistory()

  return (
    <div className='mainContainer'>
      <div className='logo'>
        <h1 className='logoBtn' onClick={() => goToPage(history, "/" )}>LabeX</h1>
      </div>

      <div className='btnNav'>
    
        <button onClick={() => goToPage(history, "/login" )}>Login</button>
        
      </div>
      
    </div>
  );
};

export default HeaderForm;