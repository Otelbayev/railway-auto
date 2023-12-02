import { useEffect } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const useIsAuthed = () => {
  const { token } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, []);
};
