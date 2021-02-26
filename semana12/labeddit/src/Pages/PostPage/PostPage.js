import React from 'react'
import '../PostPage/Styled'
import useProtectedPage from '../../Hooks/useProtectedPage'
import useForm from '../../Hooks/useForm'
import axios from "axios";
import { BASE_URL } from '../../Constants/Urls'
import BoxCreateComments from '../../Components/BoxCreateComments/BoxCreateComments'
import PostDetails from '../../Components/PostDetails/PostDetails';
import CommentsRender from '../../Components/CommentsRender/CommentsRender';


const PostPage = () =>{

    return(
        <div>
            
            <h1>Post Page</h1>
            <PostDetails/>
            <BoxCreateComments/>
            <CommentsRender/>
            
           

        </div>
    )
}

export default PostPage