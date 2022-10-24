import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HabitoComcluidoProvider from "./Provider/HabitosConcluidos";
import UsuarioLogadoProvider from "./Provider/UsuárioLogado";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UsuarioLogadoProvider>
      <HabitoComcluidoProvider>
        <App />
      </HabitoComcluidoProvider>
    </UsuarioLogadoProvider>
  </React.StrictMode>
);
