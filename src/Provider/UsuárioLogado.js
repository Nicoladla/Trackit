import { createContext, useState } from "react";

export const usuarioContext = createContext(undefined);

export default function UsuarioLogadoProvider({ children }) {
  const [usuarioAtivo, setUsuarioAtivo] = useState({});

  return (
    <usuarioContext.Provider value={{ usuarioAtivo, setUsuarioAtivo }}>
      {children}
    </usuarioContext.Provider>
  );
}
