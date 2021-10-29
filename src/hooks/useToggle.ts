import { useState } from "react";

const useToggle = (
  initialState: boolean = false
): [
  boolean,
  {
    on: () => void;
    off: () => void;
    toggle: () => void;
    reset: () => void;
  }
] => {
  const [state, setState] = useState<boolean>(initialState);
  const handlers = {
    on: () => {
      setState(true);
    },
    off: () => {
      setState(false);
    },
    toggle: () => {
      setState((state) => !state);
    },
    reset: () => {
      setState(initialState);
    },
  };

  return [state, handlers];
};

export default useToggle;
