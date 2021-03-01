import styled from 'styled-components'

export const MainContainerBox = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top:80px;
    
`

export const CardPost = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width:80%;

    .post-itens{
        display:flex;
        justify-content:space-between;
        width:100%;
    }
    .box-itens{
        display:flex;
        flex-direction:column;
        width:100%;
    }
    .username{
        display:flex;
        width:100%;
        justify-content:center;
        border-bottom: 1px solid black;
    }
    .coments{
        display:flex;
        justify-content:center;
        margin:15px;
             
    }
    .itens-bottom{
        display:flex;
        justify-content:space-between;
        width:100%;
        border-top:1px solid black;
    }
.btns{
    display:flex;
    align-items:center;
    
}
`

export const BtnCardPost = styled.button`
    display:flex;
    flex-direction:row;
    border-radius: 50%;
    
`
