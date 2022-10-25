import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HabitoComcluidoProvider from "./Provider/HabitosConcluidos";
import NumHabitoProvider from "./Provider/NumHabitosComcluidos";
import UsuarioLogadoProvider from "./Provider/UsuárioLogado";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UsuarioLogadoProvider>
      <HabitoComcluidoProvider>
        <NumHabitoProvider>
          <App />
        </NumHabitoProvider>
      </HabitoComcluidoProvider>
    </UsuarioLogadoProvider>
  </React.StrictMode>
);
