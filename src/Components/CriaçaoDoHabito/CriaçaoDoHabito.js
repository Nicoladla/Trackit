import { useState } from "react";
import styled from "styled-components";
import { AZUL_CLARO } from "../../Constants/Constants";

export default function CriaçaoDoHabito({ setQuerCriaUmHabito, habito, setHabito }) {
  const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];

  const [estaCriandoHabito, setEstaCriandoHabito] = useState(false);
  console.log(habito);

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

  return (
    <CampoCriaçaoHabito>
      <input
        type="text"
        placeholder="Nome do hábito"
        onChange={(e) => setHabito({ ...habito, name: e.target.value })}
        value={habito.name}
        disabled={estaCriandoHabito}
      />

      <ul>
        {diasDaSemana.map((dia, i) => (
          <Dia
            key={i}
            onClick={() => selecionarDia(i)}
            foiSelecionado={habito.days.includes(i)}
          >
            {dia}
          </Dia>
        ))}
      </ul>

      <footer>
        <ButaoCancelar onClick={() => setQuerCriaUmHabito(false)}>
          Cancelar
        </ButaoCancelar>
        <ButaoSalvar>Salvar</ButaoSalvar>
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
`;

const ButaoSalvar = styled.button`
  width: 84px;
  height: 35px;
`;
