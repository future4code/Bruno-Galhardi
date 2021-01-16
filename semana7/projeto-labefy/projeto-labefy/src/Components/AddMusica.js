import React from "react"
import axios from "axios"
import styled from "styled-components"

const BoxAddMusic = styled.div`
    display: flex;
    align-self:center;
    flex-direction:column;
    text-align:left;
    width:10vw;
    height:10vh;
`


class AddMusica extends React.Component{
    state = {
        inputName:'',
        inputArtist:'',
        url:''
    }

     createMusic = () =>{
        const body  = {
            name: this.state.inputName,
            artist: this.state.inputName,
            url:this.state.url

        }
     }
    



    render(){
        return(
            <BoxAddMusic>

                <label>Nome da musica:</label>
                <input></input>
                <label>Nome da musica:</label>
                <input></input>
                <label>Nome da musica:</label>
                <input></input>
                <label>Adicionar na playlist:</label>
                <select></select>
      
            </BoxAddMusic>
        )
    }

}


















export default AddMusica;