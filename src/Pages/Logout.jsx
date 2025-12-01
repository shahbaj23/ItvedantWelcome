import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { logoutUser } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    logoutUser();
    navigate("/");
  }, []);

  return null;
}
