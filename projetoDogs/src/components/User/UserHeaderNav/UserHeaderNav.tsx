import { useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import  {UserContext} from '../../../contexts/UserContext';
import ImgMinhasFotos from '../../../assets/feed.svg?react';
import ImgEstatisticas from '../../../assets/estatisticas.svg?react';
import ImgAdicionar from '../../../assets/adicionar.svg?react';
import ImgSair  from  '../../../assets/sair.svg?react';
import { Nav } from "./style";

const UserHeaderNav = () => {
 const {userLogout} = useContext(UserContext)
 const [mobile, setMobile] = useState(null);
 const navigate = useNavigate()

 const handleLogout = () => {
   userLogout()
   navigate('/login')
 }

  return (
    <Nav>
      <NavLink to='/conta' end>
         <ImgMinhasFotos/>
         {mobile && 'Minhas  Fotos'}
      </NavLink>
      <NavLink to='/conta/estatisticas'>
        <ImgEstatisticas/>
        {mobile && 'Estatísticas'}       
      </NavLink>
      <NavLink to='/conta/postar'>
        <ImgAdicionar/>
         {mobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={handleLogout}>
        <ImgSair/>       
        {mobile && 'Sair'}
        </button>
    </Nav>
  )
}

export default UserHeaderNav