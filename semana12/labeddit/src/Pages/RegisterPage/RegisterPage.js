import React from 'react'
import useUnprotectedPage from '../../Hooks/useUnprotectedPage'
import RegisterForm from './RegisterForm'
import { MainContainerLogin, } from './Styled'




const RegisterPage = ({btnOut, setBtnOut}) =>{
    useUnprotectedPage()
    return(
        <MainContainerLogin>
            <h1>Cadastre-se</h1>
            <div>
                <RegisterForm btnOut={btnOut} setBtnOut={setBtnOut}/>
            </div>
            
        </MainContainerLogin>
    )
}

export default RegisterPage