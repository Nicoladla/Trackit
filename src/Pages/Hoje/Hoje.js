import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import dayjs from "dayjs";

import HabitoDoDia from "../../Components/HabitoDoDia/HabitoDoDia";
import { URL_BASE } from "../../Constants/Constants";
import { usuarioContext } from "../../Provider/UsuárioLogado";
import { habitoComcluidoContext } from "../../Provider/HabitosConcluidos";
import { numHabitoContext } from "../../Provider/NumHabitosComcluidos";

export default function Hoje() {
  const { usuarioAtivo } = useContext(usuarioContext);
  const config = {
    headers: { Authorization: `Bearer ${usuarioAtivo.token}` },
  };

  const diasDaSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  const { habitosP100Concluidos, setHabitosP100Concluidos } = useContext(
    habitoComcluidoContext
  );

  const { habitosConcluidos, setHabitosConcluidos } =
    useContext(numHabitoContext);

  const diaCorrente = dayjs().day();
  const dataCorrente = dayjs().date();
  const mescorrente = dayjs().month();

  const [habitosDehoje, setHabitosDehoje] = useState([]);
  const [deveAtualiza, setDeveAtualiza] = useState({});

  useEffect(() => {
    setHabitosP100Concluidos(habitosConcluidos / habitosDehoje.length);
  }, [habitosConcluidos]);

  useEffect(() => {
    axios
      .get(`${URL_BASE}/habits/today`, config)

      .then((res) => setHabitosDehoje(res.data))

      .catch((erro) => console.log(erro.response.data));
  }, [deveAtualiza]);

  return (
    <TelaHoje temSelecionado={habitosP100Concluidos}>
      <h1 data-identifier="today-infos">
        {diasDaSemana[diaCorrente]}, {dataCorrente}/{mescorrente + 1}
      </h1>
      <h2 data-identifier="today-infos">
        {!habitosP100Concluidos
          ? "Nenhum hábito concluído ainda"
          : `${Math.floor(
              habitosP100Concluidos * 100
            )}% dos hábitos concluídos`}
      </h2>

      {habitosDehoje.map((h) => (
        <HabitoDoDia
          key={h.id}
          habitoDeHoje={h}
          config={config}
          setDeveAtualiza={setDeveAtualiza}
        />
      ))}
    </TelaHoje>
  );
}

const TelaHoje = styled.div`
  background-color: #f2f2f2;
  width: 100vw;
  min-height: 100vh;
  padding: 100px 18px;

  h2 {
    margin: 8px 0 28px 0;
    font-size: 18px;
    color: ${({ temSelecionado }) => (temSelecionado ? "#8FC549" : "#bababa")};
  }
`;
