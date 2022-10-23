import styled from "styled-components";

export default function Historico(){
    return(
        <TelaHistorico>
            <h1>Histórico</h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </TelaHistorico>
    )
}

const TelaHistorico = styled.div`
  background-color: #f2f2f2;
  width: 100vw;
  min-height: 100vh;
  padding: 100px 18px;

  p {
    margin-top: 17px;
    font-size: 18px;
    line-height: 22px;
  }
`;