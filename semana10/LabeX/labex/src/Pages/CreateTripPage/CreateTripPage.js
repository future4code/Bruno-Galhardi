import React, {useState, useEffect} from "react";
/* import { useHistory } from 'react-router-dom' */
import axios from "axios";
import useForm from '../../Hooks/useForm'
import '../FormPage/FormPage.css'

const CreateTripPage = () => {
  /* const history = useHistory(); */
  const [form, onChange,clearFields] = useForm({
    name:'',
    planet:'',
    date:'',
    description:'',
    durationInDays:'',
})
const listPlanet = [
  'Mércurio', 'Vênus', 'Saturno', 'Marte',  'Júpter', 'Urano', 'Netuno', 'Terra'
]
console.log(form.planet)
const onClickButton = (event)=>{
  event.preventDefault()
  clearFields()
  axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-vallim-epps/trips',form,{
    headers: {auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBubXdySGdEZFJLRzRqbkdzWVJoIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2MTI0NzI1NjF9.1vAMJ4Fy5ZSUfQPOdh7Q4vqPBG5GK76dFMy74eZT7qk"}
  })
  .then((res) =>{
   alert('Você criou uma nova missão, boa sorte ')
  })
  .catch((err) =>{
    alert("Não foi possivel criar a missão")
  })
  
}


  return (
    <div className='mainContainerForm'>
      <h1>Criar viagem:</h1>
        <div className='containerForm'>
            <form onSubmit={onClickButton}>
              <div className='boxForm'>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder={"Nome da missão"}
                  required
                  pattern={"^.{3,}"}
                  title={"O nome deve ter no mínimo 3 caracteres"}
                />
              </div>
              
              <div className='boxForm'>
                <input
                  name="date"
                  value={form.date}
                  onChange={onChange}
                  placeholder={"Data do inicio da missão"}
                  required
                  type="date"
                />
              </div>
              <div className='boxForm'>
                <input
                  name="description"
                  value={form.description}
                  onChange={onChange}
                  placeholder={"Descrição da missão"}
                  required
                  type="text"
                />
              </div>
              <div className='boxForm'>
                <input
                  name="durationInDays"
                  value={form.durationInDays}
                  onChange={onChange}
                  placeholder={"Duração da missao em dias"}
                  required
                  type="text"
                />
              </div>
              <div className='boxForm'>
                <select value={form.planet} name ='planet' onChange={onChange}>
                  {listPlanet.map((planet) =>{
                    return(
                      <option value={planet}>{planet}</option>
                    )
                  })}

               
                </select>
              
              </div>

              <button>Criar viagem</button>
        
          </form>
      </div>

      
    </div>
  );
};

export default CreateTripPage;