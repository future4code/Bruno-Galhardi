import { TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { MainContainerCreatePost} from './Styled'
import Button from '@material-ui/core/Button'
import useForm from '../../Hooks/useForm'
import axios from "axios";
import { BASE_URL } from '../../Constants/Urls'

const PostDetails = () =>{

    const [post, setPost]=useState({})
    
    const id = localStorage.getItem("postid")
    console.log(id)

    useEffect(() => {
        getDetails()
    }, [])

    const getDetails = () =>{
        axios.get(`${BASE_URL}/posts/${id}`,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        .then((res)=>{
            console.log('Detalhes',res.data.post)
            setPost(res.data.post)
            
            
           
        })
        .catch((err)=>{
            console.log(err)
        })

    }
    return(
        <div>
            <p>{post.title}</p>
            <p>{post.text}</p>

        </div>
    )
}
 
export default PostDetails