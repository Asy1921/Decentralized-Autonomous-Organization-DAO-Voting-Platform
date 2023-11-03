import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
function App() {
  return (
    <div className="">
      <BrowserRouter>
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
