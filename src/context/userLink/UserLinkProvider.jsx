// src/context/userLink/userLinkContext.jsx
import { adminLink, guestLink, loggedLink } from "../../RouteInfo";
import { UserLinkContext } from "./userLinkContext";

export const UserLinkProvider = ({ children }) => {
  const getLinkDetails = (role = "guest") => {
    switch (role) {
      case "guest":
        return guestLink;
      case "admin":
        return adminLink;
      default:
        return loggedLink;   
    }
  };

  return (
    <UserLinkContext.Provider value={{ getLinkDetails }}>
      {children}
    </UserLinkContext.Provider>
  );
};
