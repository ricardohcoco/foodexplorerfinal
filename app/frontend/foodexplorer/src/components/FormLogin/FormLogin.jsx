import { useState } from 'react';
import { ContainerLogin } from './styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FormLogin({ goRegister }) {
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmailLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPasswordLogin(e.target.value);
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const obj = {
      email: emailLogin,
      password: passwordLogin,
    };

    try {
      const response = await axios.post('http://localhost:3000/sessions', obj);
      const { data } = response;
      
      const token = data.token;

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      await axios.post('http://localhost:3000/sessions/login', obj);

      if (data.user.isAdmin === 'true') {
        navigate('/add-dishes');
      } else {
        navigate('/home');
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <ContainerLogin>
      <div className="logincontainer">
        <div className="title">
          <h1>food explorer</h1>
        </div>

        <div className="login">
          <h1>Faça seu Login</h1>

          <form>
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
            
              <button className="botaoentrar" type="submit" onClick={loginUser}>
                Entrar
              </button>

            
              <button className="botaoconta" type="submit" onClick={goRegister}>
                Criar uma Conta
              </button>
            
          </form>
        </div>
      </div>
    </ContainerLogin>
  );
}

export default FormLogin;
