import React from 'react'
import { MainContainerLogin, } from './Styled'
import {goToPage} from '../../routes/Coordinator'
import { useHistory, useParams } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import LoginForm from './LoginForm'
import useUnprotectedPage from '../../Hooks/useUnprotectedPage'
    
const LoginPage = ({btnOut, setBtnOut}) =>{
   useUnprotectedPage()
    const history = useHistory()

    return(
        <MainContainerLogin>
            <LoginForm btnOut={btnOut} setBtnOut={setBtnOut}/>
            <registerBtn>
                <Button 
                        onClick={()=> goToPage(history,'/register')}
                        fullWidth
                        variant={'text'}
                        color={'primary'}
                        type={'submit'}
                    >
                        Crie sua conta, clique aqui !
                </Button>
            </registerBtn>

        </MainContainerLogin>
    )
}

export default LoginPage