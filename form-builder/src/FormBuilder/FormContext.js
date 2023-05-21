import { createContext, useContext } from "react";

export const FormContext = createContext({});

// get context state hook
export const useFormContext = () => useContext(FormContext);
