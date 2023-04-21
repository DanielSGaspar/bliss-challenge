import { useState, useEffect, useCallback } from "react";
import api from "./api/api";
import ApiContext from "./api/ApiContext";
import LoadingScreen from "./components/Loading/LoadingScreen";
import RetryLoad from "./components/Loading/RetryLoad";
import QuestionList from "./components/Questions/QuestionList";


const App = () => {
  const [loading, setLoading] = useState(false)
  const [apiHealthy, setApiHealthy] = useState(false)

  const checkApi = useCallback(async () => {
    setLoading(true);
    const apiStatus = await api.checkApiHealth();
    setApiHealthy(apiStatus);
    setLoading(false);
  }, []);

  useEffect(() => {
    checkApi();
  }, [checkApi]);

  return (
    <ApiContext.Provider value={{ apiHealthy, setApiHealthy, checkApi }}>
      {loading? (
        <LoadingScreen />
      ) : apiHealthy ? (
        <QuestionList />
      ) : (
        <RetryLoad checkApi={checkApi} />
      )}
    </ApiContext.Provider>
  );
};

export default App;
