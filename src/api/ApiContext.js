import { createContext } from "react";

const ApiContext = createContext({
  apiHealthy: false,
  setApiHealthy: () => {},
  checkApi: () => {},
});

export default ApiContext;
