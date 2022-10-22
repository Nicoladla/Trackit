import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AZUL_CLARO } from "../../Constants/Constants";

export default function FooterMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  const percentage = 90;

  return (
    <Menu
      deveAparecer={
        location.pathname !== "/" && location.pathname !== "/cadastro"
      }
    >
      <Link to="/habitos">Hábitos</Link>

      <div onClick={() => navigate("/hoje")}>
        <CircularProgressbar
          value={percentage}
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
      <Link to="/historico">Histórico</Link>
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
