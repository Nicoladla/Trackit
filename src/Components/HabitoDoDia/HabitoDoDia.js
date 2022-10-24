import styled from "styled-components";

export default function HabitoDoDia({habitoDeHoje}) {
  return (
    <Habito>
      <div>
        <h3>{habitoDeHoje.name}</h3>
        <p>Sequência atual: {habitoDeHoje.currentSequence} dias</p>
        <p>Seu recorde: {habitoDeHoje.highestSequence} dias</p>
      </div>
      <div>
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
    color: #ebebeb;
    font-size: 69px;
  }
`;
