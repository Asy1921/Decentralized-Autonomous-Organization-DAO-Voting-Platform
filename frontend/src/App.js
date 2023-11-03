import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
