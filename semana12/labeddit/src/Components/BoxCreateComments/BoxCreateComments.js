import { TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { MainContainerCreateComment} from './styled'
import Button from '@material-ui/core/Button'
import useForm from '../../Hooks/useForm'
import axios from "axios";
import { BASE_URL } from '../../Constants/Urls'
import useProtectedPage from '../../Hooks/useProtectedPage'

const BoxCreateComments = () =>{
    
    useProtectedPage()
    const id = localStorage.getItem("postid")
    console.log(id)

    const [form, onChangeInput, clearFields] = useForm({text:''})
    const onSubmitForm = (event) =>{
        event.preventDefault()
        createComment()
    }

    const createComment = () =>{
        axios.post(`${BASE_URL}/posts/${id}/comment`, form, {
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        .then((res)=>{
            console.log(res)
            alert('Seu comentário foi criado com sucesso!')
            clearFields()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    
    return(
        <MainContainerCreateComment>
            <h3>Digite seu comentário</h3>
            <form onSubmit={onSubmitForm}>
            
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
                Comentar</Button>
            </form>
            
        </MainContainerCreateComment>
    )
}


export default BoxCreateComments