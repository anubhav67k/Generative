import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/shared/header/Header";
import Home from "./components/pages/home/Home";
import AiPhotoshoot from "./components/pages/aiPhotoshoot/AiPhotoshoot";
import ResizeImage from "./components/pages/resizeImage/ResizeImage";
import ImageEditing from "./components/pages/imageEditing/imageEditing";
import Login from "./components/pages/login/Login";
import DashBoard from "./components/pages/dashboard/DashBoard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aiphotoshoot/" element={<AiPhotoshoot />} />
          <Route path="resizeimage/" element={<ResizeImage />} />
          <Route path="imageediting/" element={<ImageEditing />} />
          <Route path="login/" element={<Login />} />
          <Route path="dashboard/" element={<DashBoard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
