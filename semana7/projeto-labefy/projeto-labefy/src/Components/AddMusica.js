import React from "react"
import axios from "axios"
import styled from "styled-components"
import { baseUrl, axiosConfig } from "../Parameters"

const BoxAddMusic = styled.div`
    display: flex;
    align-self:center;
    flex-direction:column;
    text-align:left;
    width:10vw;
    height:10vh;
`


class AddMusica extends React.Component{
    
     /* pegarNomeMusic =(e) =>{
        this.setState({inputName: e.target.value})

      }

      pegarNomeArtist =(e) =>{
        this.setState({inputArtist: e.target.value})
        
      }

      pegarNomeUrl =(e) =>{
        this.setState({inputUrl: e.target.value})
        
      } */

    render(){
        return(
            <BoxAddMusic>

                <label>Nome da musica:</label>
                <input onChange={this.pegarNomeMusic} value={this.props.inputName}></input>
                <label>Artista:</label>
                <input onChange={this.pegarNomeArtist} value={this.props.inputArtist}></input>
                <label>URL da musica:</label>
                <input onChange={this.pegarNomeUrl} value={this.props.inputUrl}></input>
                <label>Adicionar na playlist:</label>
                

            </BoxAddMusic>
        )
    }

}


















export default AddMusica;