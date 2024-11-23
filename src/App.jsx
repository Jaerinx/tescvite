import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./Components/App/nav";
import Footer from "./Components/App/Footer";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
