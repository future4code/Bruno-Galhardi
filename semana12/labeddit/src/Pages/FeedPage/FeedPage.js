import React from 'react'
import { MainContainerFeed} from './Styled'
import useProtectedPage from '../../Hooks/useProtectedPage'
import { BASE_URL } from '../../Constants/Urls'
import useRequestData from '../../Hooks/useRequestData'
import BoxPost from '../../Components/BoxPost/BoxPost'
import BoxCreatePost from '../../Components/BoxCreatePost.js/BoxCreatePost'

 const FeedPage = () => { 
    useProtectedPage()

    const posts = useRequestData(`${BASE_URL}/posts`,[])
    
    
    
    return(
        <MainContainerFeed>
            
            <h1>Feed Page</h1>
            <BoxCreatePost/>
            {posts.posts && posts.posts.map((post)=>{
                return(
                    <BoxPost
                        postid={post.id}
                        username={post.username}
                        comentarios={post.text}
                        commentsCount={post.commentsCount}
                        
                    
                    />
                   
                    
                )
            })}

        </MainContainerFeed>
    )
}

export default FeedPage