import React from "react";
import { goToPage } from "../../routes/Coordinator";
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import '../LoginPage/LoginPage.css'
  
  

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory();

  const login = () =>{
    const body = {
      email: email,
      password: password
    }
    axios
    .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-vallim-epps/login', body)
    .then((res) =>{
      localStorage.setItem('token', res.data.token)
      history.push('/admin')
    })
    .catch((err)=>{
      alert("Erro ao logar",)
    })
  }

   const onChangeEmail = (e) =>{
    setEmail(e.target.value)
  }

  const onChangePassword = (e) =>{
    setPassword(e.target.value)
  }

  useEffect(() =>{
    const token = localStorage.getItem("token")
    if (token){
      history.push('/admin')
    }
  })

  return (
    <div className='mainContainerLogin'>
      <h1>Login Page</h1>
        <div className='containerLogin'>
          <div className='boxLogin'>
            <label>E-mail:</label>
            <input value={email} onChange={onChangeEmail} placeholder="E-mail" />
          </div>
          
          <div className='boxLogin'>
            <label>Password:</label>
            <input
            value={password}
            onChange={onChangePassword}
            placeholder="Senha"
            type="password"
          />
          </div>
          
            <button onClick={login}>Login</button>

        </div>

      
    </div>
  );
};

export default LoginPage;
