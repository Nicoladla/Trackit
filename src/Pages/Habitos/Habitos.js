import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import CriaçaoDoHabito from "../../Components/CriaçaoDoHabito/CriaçaoDoHabito";
import HabitoCriado from "../../Components/HabitoCriado/HabitoCriado";
import { URL_BASE } from "../../Constants/Constants";
import { usuarioContext } from "../../Provider/UsuárioLogado";

export default function Habitos() {
  const { usuarioAtivo } = useContext(usuarioContext);
  const config = {
    headers: { Authorization: `Bearer ${usuarioAtivo.token}` },
  };

  const [querCriaUmHabito, setQuerCriaUmHabito] = useState(false);
  const [habitosDoUsuario, setHabitosDoUsuario] = useState([]);
  const [habidoAdicionado, setHabidoAdicionado] = useState({});
  const [habito, setHabito] = useState({ name: "", days: "" });
  console.log(habitosDoUsuario);

  useEffect(() => {
    axios
      .get(`${URL_BASE}/habits`, config)

      .then((res) => setHabitosDoUsuario(res.data))

      //Fazer a verificação, caso o usuário não esteja logado.
      .catch((erro) => console.log(erro.response.data));
  }, [habidoAdicionado]);

  return (
    <TelaHabitos>
      <Titulo>
        <h1>Meus hábitos</h1>
        <Butao onClick={() => setQuerCriaUmHabito(true)}>+</Butao>
      </Titulo>

      {querCriaUmHabito && (
        <CriaçaoDoHabito
          setQuerCriaUmHabito={setQuerCriaUmHabito}
          setHabidoAdicionado={setHabidoAdicionado}
          habito={habito}
          setHabito={setHabito}
          config={config}
        />
      )}

      {habitosDoUsuario.length !== 0 ? (
        habitosDoUsuario.map((h) => (
          <HabitoCriado
            key={h.id}
            titulo={h.name}
            dias={h.days}
          />
        ))
      ) : (
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      )}
    </TelaHabitos>
  );
}

const TelaHabitos = styled.div`
  background-color: #f2f2f2;
  width: 100vw;
  min-height: 100vh;
  padding: 100px 18px;

  p {
    font-size: 18px;
    line-height: 22px;
  }
`;

const Titulo = styled.header`
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Butao = styled.button`
  width: 40px;
  height: 40px;
  font-size: 30px;
`;
