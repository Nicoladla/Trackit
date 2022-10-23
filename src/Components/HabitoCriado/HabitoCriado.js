import styled from "styled-components";
import lixeira from "../../Images/trash-outline.svg";

export default function HabitoCriado({ titulo, dias }) {
  const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <CaixaHabitoCriado>
      <header>
        <h3>{titulo}</h3>
        <img src={lixeira} alt="icone" />
      </header>
      <ul>
        {diasDaSemana.map((dia, i) => (
          <Dia key={i} foiSelecionado={dias.includes(i)}>
            {dia}
          </Dia>
        ))}
      </ul>
    </CaixaHabitoCriado>
  );
}

const CaixaHabitoCriado = styled.article`
  background-color: white;
  width: 100%;
  min-height: 91px;
  margin-bottom: 20px;
  padding: 0 0 0 18px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  header {
    display: flex;
    align-items: start;
    justify-content: space-between;
  }

  h3 {
    font-size: 20px;
    margin: 15px 0;
  }

  ul {
    display: flex;
    margin-bottom: 15px;
  }

  img {
    width: 18px;
    margin: 10px 10px 0 0;
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
