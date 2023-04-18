import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from "react-router-dom";
import Splash from "./Splash";
import ASignup from "./admin/Signup";
import ASignin from "./admin/Signin";
import Hello from "./admin/Hello"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route exact path="/Splash" element={<Splash />} />
        <Route exact path="/admin/signin" element={<ASignin />} />
        <Route exact path="/admin/signup" element={<ASignup />} />
        <Route exact path="/admin/hello" element={<Hello />} />
      </Routes>
    </div>
  );
}

export default App;
