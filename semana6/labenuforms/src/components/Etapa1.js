import React from "react";

export default class Etapa1 extends React.Component{
    render (){
        return(
            <div>
                <h1>Etapa 1 - Dados Gerais</h1>
                <form>
                 <label>Qual seu nome?</label>   
                <input type="text"></input>

                <label>Qual sua Idade?</label>   
                <input type="text"></input>

                <label>Qual seu E-mail?</label>   
                <input type="text"></input>

                <label>Qual sua escolaridade?</label>
                <select>
                    <option selected disabled value="">Selecione</option>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Completo</option>
                </select>
                
                </form>
            </div>
        )





    }






}