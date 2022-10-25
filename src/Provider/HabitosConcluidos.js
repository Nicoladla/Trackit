import { createContext, useState } from "react";

export const habitoComcluidoContext = createContext(undefined);

export default function HabitoComcluidoProvider({ children }) {
  const [habitosP100Concluidos, setHabitosP100Concluidos] = useState(0);

  return (
    <habitoComcluidoContext.Provider
      value={{ habitosP100Concluidos, setHabitosP100Concluidos }}
    >
      {children}
    </habitoComcluidoContext.Provider>
  );
}
