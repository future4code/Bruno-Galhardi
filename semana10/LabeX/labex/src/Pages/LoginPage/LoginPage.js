import React from "react";
import { goToHomePage } from "../../routes/Coordinator";
import { useHistory } from 'react-router-dom'

const LoginPage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Login Pages</h1>
      <button onClick={() => goToHomePage(history)}>Ir para Home</button>
    </div>
  );
};

export default LoginPage;
