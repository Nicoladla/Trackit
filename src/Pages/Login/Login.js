import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../Images/Logo.png";

import {AZUL_CLARO} from "../../Constants/Constants"

export default function Login() {
  return (
    <TelaLogin>
      <header>
        <Logo src={logo} alt="Logo" />
      </header>
      <Formulario>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </Formulario>
      <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
    </TelaLogin>
  );
}

const TelaLogin = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: ${AZUL_CLARO};
    text-align: center;
    font-weight: 400;
    font-size: 15px;
    text-align: center;
    text-decoration-line: underline;
  }
`;

const Formulario = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 85%;
    height: 45px;
    font-size: 20px;
    margin-bottom: 27px;
  }
`;

const Logo = styled.img`
  width: 180px;
  height: 178px;
  margin-bottom: 32px;
`;
