import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { AZUL_ESCURO } from "../../Constants/Constants";

export default function HeaderTopo() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <Topo
      deveAparecer={
        location.pathname !== "/" && location.pathname !== "/cadastro"
      }
    >
      <p>TrackIt</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9E8suDEUlABnYYV-f2P2FDWxxbxnOjAndcZhYobuXNTlQaKmWrsptTVVEhz_BC9DH9Qs&usqp=CAU"
        data-identifier="avatar"
      />
    </Topo>
  );
}

const Topo = styled.header`
  background-color: ${AZUL_ESCURO};
  width: 100%;
  height: 70px;
  padding: 0 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: ${({ deveAparecer }) => (deveAparecer ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;

  p {
    color: white;
    font-family: "Playball";
    font-weight: 400;
    font-size: 39px;
  }

  img {
    width: 51px;
    height: 51px;
    object-fit: cover;
    border-radius: 100%;
  }
`;
