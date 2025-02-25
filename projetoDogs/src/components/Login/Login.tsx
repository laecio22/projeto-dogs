import { Routes, Route, Navigate } from "react-router-dom"
import LoginForm from "./LoginForm/LoginForm"
import LoginCreate from "./LoginCreate/LoginCreate"
import LoginForgetPassword from "./LoginForgetPassword/LoginForgetPassword"
import LoginResetPassword from "./LoginResetPassword/LoginResetPassword"
import { useContext } from "react"
import {UserContext} from '../../contexts/UserContext'


const Login = () => {
  const {login} = useContext(UserContext)
  if (login === true) return <Navigate to="/conta"/>
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