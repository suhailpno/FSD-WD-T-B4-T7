// src/useHistory.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useHistory = () => {
  const location = useLocation();

  useEffect(() => {
    // Get the current history from localStorage
    const history = JSON.parse(localStorage.getItem("history")) || [];

    // Add the current pathname to the history if it's not already there
    if (!history.includes(location.pathname)) {
      history.push(location.pathname);
      localStorage.setItem("history", JSON.stringify(history));
    }
  }, [location]);
};

export default useHistory;
