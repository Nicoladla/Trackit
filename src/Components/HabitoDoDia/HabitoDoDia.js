import styled from "styled-components";

export default function HabitoDoDia() {
  return (
    <Habito>
      <div>
        <h3>Ler 1 capítulo de livro</h3>
        <p>Sequência atual: 4 dias</p>
        <p>Seu recorde: 5 dias</p>
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
