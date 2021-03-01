import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { MainContainerCreatePost} from './Styled'
import Button from '@material-ui/core/Button'
import useForm from '../../Hooks/useForm'
import axios from "axios";
import { BASE_URL } from '../../Constants/Urls'

const BoxCreatePost = () =>{

    const [form, onChangeInput, clearFields] = useForm({text:'', title:''})
    const onSubmitForm = (event) =>{
        event.preventDefault()
        createPost()
    }

    const createPost = () =>{
        axios.post(`${BASE_URL}/posts`, form, {
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        .then((res)=>{
            console.log(res)
            alert('Seu post foi criado com sucesso!')
            clearFields()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <MainContainerCreatePost>
            <h3>Crie seu post</h3>
            <form onSubmit={onSubmitForm}>
            <TextField
                name={'title'}
                onChange={onChangeInput}
                label={'Titulo do Post'}
                variant={'outlined'}
                margin={'normal'}
                required
                type={'text'}
                value={form.title}
                
            />
            <textarea
                name={'text'}
                onChange={onChangeInput}
                value={form.text}
            >

            </textarea>
            <Button
                variant={'contained'}
                color={'primary'}
                type={'submit'}
            >
                Criar</Button>
            </form>    

        </MainContainerCreatePost>

    )
}

export default BoxCreatePost