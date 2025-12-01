import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    userid: 0,
    userfname: "Guest",
    userlname: "User",
    username: "Guest",
    useremail: "guest@gmail.com",
    usercontact: "",
    userrole: "guest",
  });

  const userInfoDetails = (userObj) => {
    setUserInfo({
      userid: userObj.id,
      userfname: userObj.firstName,
      userlname: userObj.lastName,
      username: userObj.username,
      useremail: userObj.email,
      userPassword: userObj.password,
      usercontact: userObj.phone,
      userrole: userObj.role,
    });
  };

  const logoutUser = () => {
    setUserInfo({
      userid: 0,
      userfname: "Guest",
      userlname: "User",
      username: "Guest",
      useremail: "guest@gmail.com",
      usercontact: "",
      userrole: "guest",
    });
  };

  return (
    <UserContext.Provider value={{ userInfo, userInfoDetails, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
