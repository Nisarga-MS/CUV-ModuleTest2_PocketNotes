import { createContext, useContext } from "react";

// a context is created to pass value of screensize across app
const sizeContext = createContext("");
export default sizeContext.Provider;

export function useSize() {
  return useContext(sizeContext);
}
