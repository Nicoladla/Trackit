import styled from "styled-components";
import CriaçaoDoHabito from "../../Components/CriaçaoDoHabito/CriaçaoDoHabito";

export default function Habitos() {
  return (
    <TelaHabitos>
      <header>
        <h1>Meus hábitos</h1>
        <Butao>+</Butao>
      </header>
      <CriaçaoDoHabito />
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
  height: 100vh;
  padding: 100px 18px 0;

  header {
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-size: 18px;
    line-height: 22px;
  }
`;

const Butao = styled.button`
  width: 40px;
  height: 40px;
  font-size: 30px;
`;
