import { createContext, useState } from "react";

export const numHabitoContext = createContext(undefined);

export default function NumHabitoProvider({ children }) {
    const [habitosConcluidos, setHabitosConcluidos] = useState(0);
  
    return (
      <numHabitoContext.Provider
        value={{ habitosConcluidos, setHabitosConcluidos }}
      >
        {children}
      </numHabitoContext.Provider>
    );
  }