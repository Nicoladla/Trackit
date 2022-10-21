import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./Components/Style/GlobalStyle";

import Cadastro from "./Pages/Cadastro/Cadastro";
import Habitos from "./Pages/Habitos/Habitos";
import Historico from "./Pages/Historico/Historico";
import Hoje from "./Pages/Hoje/Hoje";
import Login from "./Pages/Login/Login";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/hoje" element={<Hoje />} />
        <Route path="/habitos" element={<Habitos />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </BrowserRouter>
  );
}


/* 
contas:

nico@gmail.com
123

dei@gmail.com
1

lima@gmail.com
0

ar@gmail.com
2
*/