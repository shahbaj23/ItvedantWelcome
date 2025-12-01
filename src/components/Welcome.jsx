import { Outlet } from "react-router-dom";
import Main from "../Pages/Main";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Welcome() {
  // const [getLink, setGetLink] = useState("home")
  return (
    <div>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

export default Welcome;
