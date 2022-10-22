import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UsuarioLogadoProvider from "./Provider/UsuárioLogado";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UsuarioLogadoProvider>
      <App />
    </UsuarioLogadoProvider>
  </React.StrictMode>
);
