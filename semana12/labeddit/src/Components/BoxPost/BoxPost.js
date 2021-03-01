import React, { useState } from "react";
import { MainContainerBox, CardPost, BtnCardPost } from "./Styled";
import { goToPage } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'

const BoxPost = (props) => {
  const history = useHistory()

  const funcGoToPage = () =>{
    localStorage.setItem('postid', props.postid)
    goToPage(history, '/post')
   
  }
  
  return (
    <MainContainerBox>
      <CardPost>
        <div className="post-itens">
          <div className='box-itens'>
            <div className='username'>
              <p>{props.username}</p>
            </div>
            <div className='coments'>
              <p>{props.comentarios}</p>
            </div>
          </div>
        </div>
        <div className='itens-bottom'>
        <div className='btns'>
            <BtnCardPost>+</BtnCardPost>
            <BtnCardPost>-</BtnCardPost>
            <BtnCardPost>0</BtnCardPost>
          </div>
            <button onClick={()=>funcGoToPage()}>{props.commentsCount} Comentários</button>
        </div>
      </CardPost>
    </MainContainerBox>
  );
};

export default BoxPost;
