import React from 'react'
import { InputsContainer} from './Styled'
import { useHistory, useParams } from 'react-router-dom'
import { TextField } from '@material-ui/core'
import useForm from '../../Hooks/useForm'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { BASE_URL } from '../../Constants/Urls'




const RegisterForm = ({btnOut, setBtnOut}) => {
    const history = useHistory()

    const [form, onChangeInput, clearFields] = useForm({email:'', password:'', username:''})
    
    const onSubmitForm =(event) =>{
        event.preventDefault()
        registerUser()

    }
    const registerUser = () =>{
        axios.post(`${BASE_URL}/signup`, form)
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
                        label={'E-Mail'}
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
                        margin={'normal'}
                        required
                        type={'password'}
                    />
                    <TextField
                        name={'username'}
                        value={form.username}
                        onChange={onChangeInput}
                        label={'Nome de Usuário'}
                        variant={'outlined'}
                        fullWidth
                        margin={'normal'}
                        required
                        type={'text'}
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


export default RegisterForm