import React from 'react'
import '../HomePage/Styled'
import { MainContainerLogin, } from './Styled'
import Button from '@material-ui/core/Button';
import { goToPage} from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom';

const HomePage = () =>{
    const history = useHistory()
    return(
        <MainContainerLogin>

            <h1>Seja Bem vindo ao Labeddit</h1>
            <Button onClick={()=> goToPage(history,'/register')}>Não tem uma conta, clique aqui!</Button>

        </MainContainerLogin>
    )
}

export default HomePage