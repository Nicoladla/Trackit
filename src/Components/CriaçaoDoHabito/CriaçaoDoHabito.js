import styled from "styled-components";
import { AZUL_CLARO } from "../../Constants/Constants";

export default function CriaçaoDoHabito() {
  const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <CampoCriaçaoHabito>
      <input type="text" placeholder="Nome do hábito" />
      <ListaDias>
        {diasDaSemana.map((d) => (
          <li>{d}</li>
        ))}
      </ListaDias>
      <footer>
        <ButaoCancelar>Cancelar</ButaoCancelar>
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

  footer {
    display: flex;
    justify-content: flex-end;
  }
`;

const ListaDias = styled.ul`
  margin-bottom: 29px;
  display: flex;

  li {
    color: #dbdbdb;
    width: 30px;
    height: 30px;
    margin-right: 4px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
