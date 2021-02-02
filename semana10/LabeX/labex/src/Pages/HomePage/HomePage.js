import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import {goToLoginPage} from '../../routes/Coordinator'




const HomePage = () =>{
    
    const history = useHistory()
    
    return(
        <div>
           <h1>HomePage</h1>
           <p>Login:</p>
           <button onClick={() => goToLoginPage(history)}>Ir para goToLoginPage</button>


        </div>

    )
}
    
export default HomePage