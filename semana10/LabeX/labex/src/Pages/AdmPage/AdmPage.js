import React from 'react'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import '../HomePage/HomePage.css'



const AdmPage = () =>{
    
    useProtectedPage()
   
    
    return(
        <div className='containerHome'>
            
           <h1>Admin Page</h1>
                  
        </div>

    )
}
    
export default AdmPage