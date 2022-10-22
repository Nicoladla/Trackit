import styled from "styled-components";
import CriaçaoDoHabito from "../../Components/CriaçaoDoHabito/CriaçaoDoHabito";
import HabitoCriado from "../../Components/HabitoCriado/HabitoCriado";

export default function Habitos() {
  return (
    <TelaHabitos>
      <Titulo>
        <h1>Meus hábitos</h1>
        <Butao>+</Butao>
      </Titulo>

      <p>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </p>
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
