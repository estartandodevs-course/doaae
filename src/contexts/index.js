import { createContext, useState } from "react";
import getAllInstituicoes from "../services/api";

const InstituicaoContext = createContext({
  instituicoes: [],
  setInstituicoes: () => {},
  getAll: () => {},
});

const InstituicaoProvider = ({ children }) => {
  const [instituicoes, setInstituicoes] = useState([]);

  const getAll = () => {
    const res = getAllInstituicoes();
    setInstituicoes(res);
  };

  return (
    <InstituicaoContext.Provider value={{ instituicoes, getAll }}>
      {children}
    </InstituicaoContext.Provider>
  );
};

export { InstituicaoContext, InstituicaoProvider };
