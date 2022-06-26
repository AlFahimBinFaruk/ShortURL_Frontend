import React, { useState, useContext, useEffect } from "react";
//App context
const AppContext = React.createContext();
//App Provider
const AppProvider = ({ children }) => {
  //shortURL state
  const [shortURL, setShortURL] = useState("");
  //show alert sate
  const [showAlert, setShowAlert] = useState(false);
  //listen for showalert and reset it after 5 sec if it is not empty
  useEffect(() => {
    if (showAlert) {
      const alertTimeOut = setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return () => clearTimeout(alertTimeOut);
    }
  }, [showAlert]);

  return (
    <AppContext.Provider
      value={{ shortURL, setShortURL, showAlert, setShowAlert }}
    >
      {children}
    </AppContext.Provider>
  );
};
//global app context
export const useGlobalAppContext = () => {
  return useContext(AppContext);
};
//export appcontext and appprovider
export { AppContext, AppProvider };
