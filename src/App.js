import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import AiPhotoshoot from "./components/pages/aiPhotoshoot/AiPhotoshoot";
import ResizeImage from "./components/pages/resizeImage/ResizeImage";
import ImageEditing from "./components/pages/imageEditing/ImageEditing";
import Login from "./components/pages/login/Login";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aiphotoshoot" element={<AiPhotoshoot />} />
          <Route path="/resizeimage" element={<ResizeImage />} />
          <Route path="/imageediting" element={<ImageEditing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
