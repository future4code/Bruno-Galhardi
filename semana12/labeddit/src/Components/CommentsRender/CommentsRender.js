import React, { useState, useEffect } from "react"
import axios from "axios";
import { BASE_URL } from '../../Constants/Urls'

const CommentsRender = () =>{
    const [comments, setComments]=useState([])
    
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
            setComments(res.data.post.comments)
            
            
           
        })
        .catch((err)=>{
            console.log(err)
        })

    }
    return(
        <div>
             {comments && comments.map((coment)=>{
                return(
                    <p>{coment.text}</p>
                )
            })}
        </div>
    )
}

export default CommentsRender