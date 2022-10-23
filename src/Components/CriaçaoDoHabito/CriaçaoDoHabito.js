import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { AZUL_CLARO, URL_BASE } from "../../Constants/Constants";

export default function CriaçaoDoHabito(props) {
  const {
    setQuerCriaUmHabito,
    habito,
    setHabito,
    config,
    setHabidoAdicionado,
  } = props;

  const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];

  const [estaCriandoHabito, setEstaCriandoHabito] = useState(false);

  function selecionarDia(i) {
    const foiSelecionado = habito.days.includes(i);

    if (estaCriandoHabito) return;

    if (!foiSelecionado) {
      setHabito({ ...habito, days: [...habito.days, i] });
    } else {
      setHabito({
        ...habito,
        days: habito.days.filter((indexDia) => indexDia !== i),
      });
    }
  }

  function criarHabito() {
    setEstaCriandoHabito(true);

    const campoInvalido = validarDadosDeEnvio();

    axios
      .post(`${URL_BASE}/habits`, habito, config)

      .then((res) => {
        console.log(res.data);
        setEstaCriandoHabito(false);
        setQuerCriaUmHabito(false);
        setHabito({ name: "", days: "" });
        setHabidoAdicionado(res.data);
      })

      .catch((erro) => {
        setEstaCriandoHabito(false);
        alert(campoInvalido);
      });
  }

  function validarDadosDeEnvio() {
    if (habito.name === "") {
      return "Você deve dar um nome ao seu hábito.";
    } else if (habito.days.length === 0) {
      return "Você deve selecionar pelo menos um dia para poder realizar seu hábito.";
    }
  }

  return (
    <CampoCriaçaoHabito>
      <input
        type="text"
        placeholder="Nome do hábito"
        onChange={(e) => setHabito({ ...habito, name: e.target.value })}
        value={habito.name}
        disabled={estaCriandoHabito}
        data-identifier="input-habit-name"
      />

      <ul>
        {diasDaSemana.map((dia, i) => (
          <Dia
            key={i}
            onClick={() => selecionarDia(i)}
            foiSelecionado={habito.days.includes(i)}
            data-identifier="week-day-btn"
          >
            {dia}
          </Dia>
        ))}
      </ul>

      <footer>
        <ButaoCancelar
          onClick={() => setQuerCriaUmHabito(false)}
          disabled={estaCriandoHabito}
          data-identifier="cancel-habit-create-btn"
        >
          Cancelar
        </ButaoCancelar>

        <ButaoSalvar
          onClick={criarHabito}
          disabled={estaCriandoHabito}
          data-identifier="save-habit-create-btn"
        >
          {estaCriandoHabito ? (
            <ThreeDots
              color="white"
              ariaLabel="three-dots-loading"
              height="20"
              width="50"
            />
          ) : (
            "Salvar"
          )}
        </ButaoSalvar>
      </footer>
    </CampoCriaçaoHabito>
  );
}

const CampoCriaçaoHabito = styled.aside`
  background-color: white;
  width: 100%;
  height: 180px;
  margin-bottom: 30px;
  padding: 18px 18px 0;
  border-radius: 5px;

  input {
    width: 100%;
  }

  ul {
    margin-bottom: 29px;
    display: flex;
  }

  footer {
    display: flex;
    justify-content: flex-end;
  }
`;

const Dia = styled.li`
  background-color: ${({ foiSelecionado }) =>
    foiSelecionado ? "#CFCFCF" : "#FFFFFF"};
  color: ${({ foiSelecionado }) => (foiSelecionado ? "#FFFFFF" : "#DBDBDB")};
  width: 30px;
  height: 30px;
  margin-right: 4px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButaoCancelar = styled.button`
  background-color: white;
  color: ${AZUL_CLARO};
  width: 84px;
  height: 35px;
  margin-right: 23px;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;

const ButaoSalvar = styled.button`
  width: 84px;
  height: 35px;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;
