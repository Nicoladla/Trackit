import { createContext, useState } from "react";

export const habitoComcluidoContext = createContext(undefined);

export default function HabitoComcluidoProvider({ children }) {
  const [habitosConcluidos, setHabitosConcluidos] = useState(0);

  return (
    <habitoComcluidoContext.Provider
      value={{ habitosConcluidos, setHabitosConcluidos }}
    >
      {children}
    </habitoComcluidoContext.Provider>
  );
}
