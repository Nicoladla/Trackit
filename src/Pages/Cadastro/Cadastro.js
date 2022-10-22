import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import logo from "../../Images/Logo.png";
import { AZUL_CLARO, URL_BASE } from "../../Constants/Constants";

export default function Cadastro() {
  const navigate = useNavigate();

  const [estaCadastrandoUsuario, setEstaCadastrandoUsuario] = useState(false);

  const [cadastro, setCadastro] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });

  function atualizarInformaçoesDoCadastro(e) {
    setCadastro({ ...cadastro, [e.target.name]: e.target.value });
  }

  function cadastrarUsuario(e) {
    e.preventDefault();

    setEstaCadastrandoUsuario(true);

    axios
      .post(`${URL_BASE}/auth/sign-up`, cadastro)

      .then((res) => {
        navigate("/");
        setEstaCadastrandoUsuario(false);
      })

      .catch((erro) => {
        console.log(erro.response);
        alert(erro.response.data.message);
        setEstaCadastrandoUsuario(false);
      });
  }

  return (
    <TelaCadastro>
      <header>
        <Logo src={logo} alt="Logo" />
      </header>
      <Formulario onSubmit={cadastrarUsuario}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={cadastro.email}
          onChange={atualizarInformaçoesDoCadastro}
          disabled={estaCadastrandoUsuario}
          required
          data-identifier="input-email"
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          value={cadastro.senha}
          onChange={atualizarInformaçoesDoCadastro}
          disabled={estaCadastrandoUsuario}
          required
          data-identifier="input-password"
        />
        <input
          type="text"
          placeholder="Nome"
          name="name"
          value={cadastro.nome}
          onChange={atualizarInformaçoesDoCadastro}
          disabled={estaCadastrandoUsuario}
          required
          data-identifier="input-name"
        />
        <input
          type="url"
          placeholder="Foto"
          name="image"
          value={cadastro.foto}
          onChange={atualizarInformaçoesDoCadastro}
          disabled={estaCadastrandoUsuario}
          required
          data-identifier="input-photo"
        />
        <EnviaCadastro type="submit" disabled={estaCadastrandoUsuario}>
          {estaCadastrandoUsuario ? (
            <ThreeDots
              color="white"
              ariaLabel="three-dots-loading"
              height="20"
              width="50"
            />
          ) : (
            "Cadastrar"
          )}
        </EnviaCadastro>
      </Formulario>

      <Link to="/" data-identifier="back-to-login-action">
        Já tem uma conta? Faça login!
      </Link>
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
`;

const EnviaCadastro = styled.button`
  width: 85%;
  height: 45px;
  font-size: 20px;
  margin-bottom: 27px;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;
