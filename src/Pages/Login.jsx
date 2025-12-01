import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Login() {
  // const [userEmail, setUserEmail] = useState("");
  // const [userPassword, setUserPassword] = useState("");
  const [dataUser, setDataUser] = useState([]);

  const username = useRef(null);
  const userPassword = useRef(null);

  const { userInfoDetails } = useContext(UserContext);

  const navigate = useNavigate();

  const userAPI = async () => {
    const response = await axios.get("https://dummyjson.com/users");
    const data = await response.data.users;
    setDataUser(data);
  };
  console.log(dataUser);

  useEffect(() => {
    username.current.focus();

    userAPI();
  }, []);

  const handleSubmit = () => {
    // console.log(emailId.current.value, userPasswor.current.value);

    // const userValid = dataUser.find(
    //   (user) =>
    //     user.email === emailId.current.value &&
    //     user.password === userPasswor.current.value
    // );

    //   //find method?

    const result = dataUser.find(
      (user) =>
        user.username === username.current.value &&
        user.password === userPassword.current.value
    );

    if (result) {
      userInfoDetails(result);
      alert("Login successfully");
      navigate("/");
    }

    // console.log(userEmail, userPassword);
  };
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <form className="flex flex-col rounded-2xl  p-8 shadow-2xl border ">
        <h1 className="text-center font-bold text-4xl mb-6">Login</h1>

        <label className="mb-1">Email:</label>
        <input
          ref={username}
          className="outline-none bg-[#cfcfcf] text-black w-[280px] text-[17px] rounded-md mb-4 px-3 py-2 focus:ring-2 focus:ring-indigo-300"
          placeholder="Enter email..."
          type="text"
          // onChange={(e) => setUserEmail(e.target.value)}
        />

        <label className="mb-1">Password:</label>
        <input
          ref={userPassword}
          className="outline-none bg-[#cfcfcf] text-gray-900 w-[280px] text-[17px] rounded-md mb-4 px-3 py-2 focus:ring-2 focus:ring-indigo-300"
          placeholder="Password"
          type="password"
          name="password"
          // onChange={(e) => setUserPassword(e.target.value)}
        />

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white py-2 px-4 mt-4 rounded-md font-semibold shadow-md"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
