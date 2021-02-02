import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import {goToLoginPage} from '../../routes/Coordinator'
import '../HomePage/HomePage.css'




const HomePage = () =>{
    
    const history = useHistory()
    
    return(
        <div className='containerHome'>
           <h1>HomePage</h1>
           <p>Login:</p>
           <button onClick={() => goToLoginPage(history, "/login" )}>Ir para LoginPage</button>


        </div>

    )
}
    
export default HomePage