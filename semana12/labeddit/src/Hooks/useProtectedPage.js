import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import {goToPage} from '../routes/Coordinator'

const useProtectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      goToPage(history, "/login");
    }
  }, [history]);
}

export default useProtectedPage