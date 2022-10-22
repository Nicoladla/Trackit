import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import logo from "../../Images/Logo.png";
import { AZUL_CLARO, URL_BASE } from "../../Constants/Constants";
import { usuarioContext } from "../../Provider/UsuárioLogado";

export default function Login() {
  const navigate = useNavigate();

  const { setUsuarioAtivo } = useContext(usuarioContext);

  const [estaFazendoLogin, setEstaFazendoLogin] = useState(false);
  const [login, setLogin] = useState({ email: "", password: "" });

  function atualizarDadosDoLogin(e) {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  function fazerLogin(e) {
    e.preventDefault();

    setEstaFazendoLogin(true);

    axios
      .post(`${URL_BASE}/auth/login`, login)

      .then((res) => {
        setUsuarioAtivo(res.data);
        navigate("/hoje");
        setEstaFazendoLogin(false);
      })

      .catch((erro) => {
        alert(erro.response.data.message);
        setEstaFazendoLogin(false);
      });
  }

  return (
    <TelaLogin>
      <header>
        <Logo src={logo} alt="Logo" />
      </header>
      <Formulario onSubmit={fazerLogin}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={login.email}
          onChange={atualizarDadosDoLogin}
          disabled={estaFazendoLogin}
          required
          data-identifier="input-email"
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          value={login.password}
          onChange={atualizarDadosDoLogin}
          disabled={estaFazendoLogin}
          required
          data-identifier="input-password"
        />

        <FazLogin
          type="submit"
          disabled={estaFazendoLogin}
          data-identifier="login-btn"
        >
          {estaFazendoLogin ? (
            <ThreeDots
              color="white"
              ariaLabel="three-dots-loading"
              height="20"
              width="50"
            />
          ) : (
            "Entrar"
          )}
        </FazLogin>
      </Formulario>

      <Link to="/cadastro" data-identifier="sign-up-action">
        Não tem uma conta? Cadastre-se!
      </Link>
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

const FazLogin = styled.button`
  width: 85%;
  height: 45px;
  font-size: 20px;
  margin-bottom: 27px;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;
