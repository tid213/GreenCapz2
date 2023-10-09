import { Route, Routes } from "react-router-dom";
import { Login, Signup, AddReading } from "./pages";
import Home from "./pages/Home";
import TechSpecs from "./pages/TechSpecs"; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addreading" element={<AddReading />} />
        <Route path="/techspecs" element={<TechSpecs />} />
      </Routes>
    </div>
  );
}

export default App;
