import styled from "styled-components";
import HabitoDoDia from "../../Components/HabitoDoDia/HabitoDoDia";

export default function Hoje() {
  return (
    <TelaHoje>
      <h1>Segunda, 17/05</h1>
      <h2>Nenhum hábito concluído ainda</h2>

      <HabitoDoDia/>
    </TelaHoje>
  );
}

const TelaHoje = styled.div`
  background-color: #f2f2f2;
  width: 100vw;
  min-height: 100vh;
  padding: 100px 18px;

  h2{
    margin: 8px 0 28px 0;
    font-size: 18px;
    color: #BABABA;
  }
`;
