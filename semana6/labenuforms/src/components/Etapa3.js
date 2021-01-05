import React from "react";

export default class Etapa3 extends React.Component{
    render (){
        
        return(
            <div>
                <h1>ETAPA 3: Informações sobre quem não se formou no ensino superior nem está cursando</h1>
                <form>
                    <label>Por que você não terminou um curso de graduação?</label>
                    <input type="text"></input>

                    <label>Você fez algum curso complementar?</label>
                    <select>
                        <option selected disabled value="">Selecione</option>
                        <option>Curso técnico</option>
                        <option>Cursos de inglês</option>
                        <option>Não fiz curso complementar</option>
                    </select>
                </form>
            </div>


        )
        




    }






}