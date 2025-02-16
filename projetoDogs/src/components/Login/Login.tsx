import { Routes, Route } from "react-router-dom"
import LoginForm from "./LoginForm/LoginForm"
import LoginCreate from "./LoginCreate/LoginCreate"
import LoginForgetPassword from "./LoginForgetPassword/LoginForgetPassword"
import LoginResetPassword from "./LoginResetPassword/LoginResetPassword"


const Login = () => {
  return (
    <div>
      <Routes>
         <Route path="/" element={<LoginForm/>} />
         <Route path="criar" element={<LoginCreate/>}/>
         <Route path="resetar-senha" element={<LoginResetPassword/>}/>
         <Route path="esqueceu-senha" element={<LoginForgetPassword/>}/>
      </Routes>
      
      </div>
  )
}

export default Login