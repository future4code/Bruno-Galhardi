import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import {goToPage} from '../routes/Coordinator'

const useUnprotectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      goToPage(history, "/feed");
    }
  }, [history]);
}

export default useUnprotectedPage