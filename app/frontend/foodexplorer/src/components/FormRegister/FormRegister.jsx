import { useState } from 'react';
import { ContainerFormLogin } from './styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FormRegister({ goLogin }) {
  const [name, setName] = useState('');
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [createError, setCreateError] = useState(false);
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmailLogin(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPasswordLogin(e.target.value);
  };

  const createUser = async () => {
    const obj = {
      name,
      email: emailLogin,
      password: passwordLogin,
    };
        
    await axios.post('http://localhost:3000/users', obj);
    navigate('/');

  };

  return (
    <ContainerFormLogin>
      <div className="formlogincontainer">
        <div className="title">
          <h1>food explorer</h1>
        </div>

        <div className="create">
          <h1>Crie sua Conta</h1>

          <form>
            <label htmlFor="text">Seu nome</label>
            <input
              type="text"
              onChange={handleChangeName}
              placeholder="Exemplo: Maria da Silva"
            />
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              onChange={handleChangeEmail}
              placeholder="Exemplo: exemplo@exemplo.com"
            />
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              placeholder="No mínimo 6 caracteres"
              onChange={handleChangePassword}
            />

            {createError && <p className="error-message">{errorMessage}</p>}

            <button className="botaoentrar" type="button" onClick={createUser}>
              Criar conta
            </button>

            <button className="botaoback" type="button" onClick={goLogin}>
              Já tenho uma conta
            </button>
          </form>
        </div>
      </div>
    </ContainerFormLogin>
  );
}

export default FormRegister;