import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AZUL_CLARO } from "../../Constants/Constants";
import { useContext } from "react";
import { habitoComcluidoContext } from "../../Provider/HabitosConcluidos";

export default function FooterMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const {habitosP100Concluidos} = useContext(habitoComcluidoContext)

  return (
    <Menu
      deveAparecer={
        location.pathname !== "/" && location.pathname !== "/cadastro"
      }
    >
      <Link to="/habitos" data-identifier="habit-page-action">
        Hábitos
      </Link>

      <div onClick={() => navigate("/hoje")}>
        <CircularProgressbar
          value={habitosP100Concluidos * 100}
          text={`Hoje`}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#52B6FF",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
      </div>
      <Link to="/historico" data-identifier="historic-page-action">
        Histórico
      </Link>
    </Menu>
  );
}

const Menu = styled.footer`
  background-color: white;
  width: 100%;
  height: 70px;
  display: ${({ deveAparecer }) => (deveAparecer ? "flex" : "none")};
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  left: 0;

  div {
    border-radius: 100%;
    width: 91px;
    margin-bottom: 40px;
  }

  a {
    color: ${AZUL_CLARO};
    text-decoration: none;
    font-size: 18px;
  }
`;
