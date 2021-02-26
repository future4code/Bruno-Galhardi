import React from 'react'
import { InputsContainer} from './Styled'
import { useHistory, useParams } from 'react-router-dom'
import { TextField } from '@material-ui/core'
import useForm from '../../Hooks/useForm'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { BASE_URL } from '../../Constants/Urls'
import { goToPage } from '../../routes/Coordinator'



const LoginForm = ({btnOut, setBtnOut}) =>{    
    const history = useHistory()
    
    const [form, onChangeInput, clearFields] = useForm({email:'', password:''})
    
    const onSubmitForm =(event) =>{
        event.preventDefault()
        login()
        
    }

    const login = () =>{
        axios.post(`${BASE_URL}/login`, form)
        .then((res) =>{
            localStorage.setItem('token', res.data.token)
            clearFields()
            history.push('/feed')
            setBtnOut('Logout')
            
            
        })
        .catch((err) =>{
            alert(err.response.data.message)
        })
    }

    return(
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={'email'}
                        value={form.email}
                        onChange={onChangeInput}
                        label={'E-mail'}
                        variant={'outlined'}
                        fullWidth
                        margin={'normal'}
                        required
                        type={'email'}
                    />
                    <TextField
                        name={'password'}
                        value={form.password}
                        onChange={onChangeInput}
                        label={'Senha'}
                        variant={'outlined'}
                        fullWidth
                        required
                        type={'password'}
                    />

                    <Button
                        
                        fullWidth
                        variant={'contained'}
                        color={'primary'}
                        type={'submit'}
                    >
                        Entrar
                    </Button>

                </form>                       
            </InputsContainer>
    )
}

export default LoginForm