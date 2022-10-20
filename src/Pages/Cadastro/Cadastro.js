import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../Images/Logo.png";

import { AZUL_CLARO } from "../../Constants/Constants";

export default function Cadastro() {
  return (
    <TelaCadastro>
      <header>
        <Logo src={logo} alt="Logo" />
      </header>
      <Formulario>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />
        <input type="text" placeholder="Nome" required />
        <input type="url" placeholder="Foto" required />
        <button type="submit">Cadastrar</button>
      </Formulario>
      <Link to="/">Já tem uma conta? Faça login!</Link>
    </TelaCadastro>
  );
}

const TelaCadastro = styled.div`
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

const Logo = styled.img`
  width: 180px;
  height: 178px;
  margin-bottom: 32px;
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
