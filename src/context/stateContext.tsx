import { createContext, FC, useContext, useState } from "react";

export const StateContext = createContext<StateContextData | null>(null);

export const StateProvider: FC = ({ children }) => {
  const value = useProviderState();
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

const useProviderState = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [click, setClick] = useState(false);
  const [isResize, setIsResize] = useState(true);

  return {
    isScroll,
    setIsScroll,
    click,
    setClick,
    isResize,
    setIsResize,
  };
};
type StateContextData = ReturnType<typeof useProviderState>;

// hook
export const useStateContext = () => {
  const stateContext = useContext(StateContext);

  if (!stateContext) {
    throw new Error(
      "GB:useStateContext must be used inside StateProvider,PL:useStateContext musi być użyte wewnątrz StateProvider"
    );
  }
  return stateContext;
};
