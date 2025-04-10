import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import Photo from "./components/Photo/Photo";
import { UserStorage } from "./contexts/UserContext";
import ProtectedRoute from "./helper/ProtectedRoute";
import "./index.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login/*" element={<Login />}></Route>
            <Route path="/conta/*" element={<ProtectedRoute><User/></ProtectedRoute>}></Route>
            <Route path="/foto/:id" element={<ProtectedRoute><Photo/></ProtectedRoute>}></Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
