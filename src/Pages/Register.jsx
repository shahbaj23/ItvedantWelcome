import { useReducer } from "react";

const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
};

const reducer = (state, action) =>{
    return {
        ...state,
        [action.field]: action.value
    }
}

function Register() {

    const [state, dispatch] = useReducer(reducer, initialData)

    const handleChange = (e)=>{
        dispatch({
            field: e.target.name,
            value: e.target.value
        })
    }

    const handleSumit = ()=>{
        console.log(state)
    }

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <form className="flex flex-col rounded-2xl  p-8 shadow-2xl border ">
        <h1 className="text-center font-bold text-4xl mb-6">Login</h1>

        <label className="mb-1">First Name:</label>
        <input
          className="outline-none bg-[#cfcfcf] text-black w-[280px] text-[17px] rounded-md mb-4 px-3 py-2 focus:ring-2 focus:ring-indigo-300"
          placeholder="Enter email..."
          type="text"
          name="fistname"
          onChange={handleChange}
          // onChange={(e) => setUserEmail(e.target.value)}
        />
        <label className="mb-1">Last Name:</label>
        <input
          className="outline-none bg-[#cfcfcf] text-black w-[280px] text-[17px] rounded-md mb-4 px-3 py-2 focus:ring-2 focus:ring-indigo-300"
          placeholder="Enter email..."
          type="text"
          name="lastname"
          onChange={handleChange}
          // onChange={(e) => setUserEmail(e.target.value)}
        />
        <label className="mb-1">Email:</label>
        <input
          className="outline-none bg-[#cfcfcf] text-black w-[280px] text-[17px] rounded-md mb-4 px-3 py-2 focus:ring-2 focus:ring-indigo-300"
          placeholder="Enter email..."
          type="text"
          name="email"
          onChange={handleChange}
          // onChange={(e) => setUserEmail(e.target.value)}
        />

        <label className="mb-1">Password:</label>
        <input
          className="outline-none bg-[#cfcfcf] text-gray-900 w-[280px] text-[17px] rounded-md mb-4 px-3 py-2 focus:ring-2 focus:ring-indigo-300"
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleChange}
          // onChange={(e) => setUserPassword(e.target.value)}
        />

        <button
          type="button"
          onClick={handleSumit}
          className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white py-2 px-4 mt-4 rounded-md font-semibold shadow-md"
          
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
