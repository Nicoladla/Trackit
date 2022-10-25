import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { URL_BASE } from "../../Constants/Constants";
import { numHabitoContext } from "../../Provider/NumHabitosComcluidos";

export default function HabitoDoDia(props) {
  const { habitoDeHoje, config, setDeveAtualiza } = props;

  const { habitosConcluidos, setHabitosConcluidos } =
    useContext(numHabitoContext);

  const [estaMarcado, setEstaMarcado] = useState(habitoDeHoje.done);

  useEffect(() => {
    if (estaMarcado) {
      setHabitosConcluidos(habitosConcluidos + 1);
    }
  }, []);

  function AtualizarstatusHabito() {
    setEstaMarcado(!estaMarcado);

    if (!estaMarcado) {
      axios
        .post(
          `${URL_BASE}/habits/${habitoDeHoje.id}/check`,
          habitoDeHoje.id,
          config
        )
        .then((res) => {
          setDeveAtualiza({});
          setHabitosConcluidos(habitosConcluidos + 1);
        })
        .catch((erro) => console.log(erro.response.data.message));
    } else {
      axios
        .post(
          `${URL_BASE}/habits/${habitoDeHoje.id}/uncheck`,
          habitoDeHoje.id,
          config
        )
        .then((res) => {
          setDeveAtualiza({});
          setHabitosConcluidos(habitosConcluidos - 1);
        })
        .catch((erro) => console.log(erro.response.data.message));
    }
  }

  return (
    <Habito estaMarcado={estaMarcado}>
      <div data-identifier="today-infos">
        <h3>{habitoDeHoje.name}</h3>
        <p>
          Sequência atual:{" "}
          <SequeciaAtual estaMarcado={estaMarcado}>
            {habitoDeHoje.currentSequence} dias
          </SequeciaAtual>
        </p>
        <p>
          Seu recorde:{" "}
          <RecordAtual
            estaMarcado={estaMarcado}
            sequenciaAtual={habitoDeHoje.currentSequence}
            recordAtual={habitoDeHoje.highestSequence}
          >
            {habitoDeHoje.highestSequence} dias
          </RecordAtual>
        </p>
      </div>
      <div onClick={AtualizarstatusHabito} data-identifier="done-habit-btn">
        <ion-icon name="checkbox"></ion-icon>
      </div>
    </Habito>
  );
}

const Habito = styled.article`
  background-color: white;
  width: 100%;
  min-height: 94px;
  margin-bottom: 20px;
  padding: 13px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    font-size: 13px;
    line-height: 16px;
  }

  ion-icon {
    color: ${({ estaMarcado }) => (estaMarcado ? "#8FC549" : "#ebebeb")};
    font-size: 69px;
  }
`;

const SequeciaAtual = styled.span`
  color: ${(props) => (props.estaMarcado ? "#8FC549" : "#666666")};
`;

const RecordAtual = styled.span`
  color: ${(props) =>
    props.sequenciaAtual === props.recordAtual && props.estaMarcado
      ? "#8FC549"
      : "#666666"};
`;
