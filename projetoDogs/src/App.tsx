import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import Photo from "./components/Photo/Photo";
import UserProfile from "./components/User/UserProfile/UserProfile";
import { UserStorage } from "./contexts/UserContext.tsx";
import ProtectedRoute from "./helper/ProtectedRoute";
import "./index.css";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login/*" element={<Login />}></Route>
              <Route
                path="/conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/foto/:id"
                element={
                  <ProtectedRoute>
                    <Photo />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="/perfil/:user" element={<UserProfile />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
