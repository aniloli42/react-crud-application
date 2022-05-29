import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import Error from "./pages/Error";
import Home from "./pages/Home";
import ManageData from "./pages/ManageData/ManageData";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/create" element={<ManageData />} />
        <Route path="/update/:id" element={<ManageData />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
