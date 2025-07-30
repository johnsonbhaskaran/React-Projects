import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "+21 42 3424 345";
  const name = "GreatStack";

  return <AppContext.Provider value={{ phone, name }}>{props.children}</AppContext.Provider>;
};

export default ContextProvider;
