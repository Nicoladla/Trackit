import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import dayjs from "dayjs";

import HabitoDoDia from "../../Components/HabitoDoDia/HabitoDoDia";
import { URL_BASE } from "../../Constants/Constants";
import { usuarioContext } from "../../Provider/UsuárioLogado";

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

  const diaCorrente = dayjs().day();
  const dataCorrente = dayjs().date();
  const mescorrente = dayjs().month();

  const [habitosDehoje, setHabitosDehoje] = useState([]);
  console.log(habitosDehoje);

  useEffect(() => {
    axios
      .get(`${URL_BASE}/habits/today`, config)

      .then((res) => setHabitosDehoje(res.data))

      .catch((erro) => console.log(erro.response.data));
  }, []);

  return (
    <TelaHoje>
      <h1>
        {diasDaSemana[diaCorrente]}, {dataCorrente}/{mescorrente + 1}
      </h1>
      <h2>Nenhum hábito concluído ainda</h2>

      {habitosDehoje.map((h) => (
        <HabitoDoDia key={h.id} habitoDeHoje={h} />
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
    color: #bababa;
  }
`;
