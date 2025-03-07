import { useContext } from "react"
import { NavLink } from "react-router-dom"
import  {UserContext} from '../../../contexts/UserContext';
import ImgMinhasFotos from '../../../assets/feed.svg?react';
import ImgEstatisticas from '../../../assets/estatisticas.svg?react';
import ImgAdicionar from '../../../assets/adicionar.svg?react';
import ImgSair  from  '../../../assets/sair.svg?react';

const UserHeaderNav = () => {
 const {userLogout} = useContext(UserContext)
  return (
    <nav>
      <NavLink to='/conta'>
         <ImgMinhasFotos/>
         Minhas  Fotos
      </NavLink>
      <NavLink to='/conta/estatisticas'>
        <ImgEstatisticas/>
         Estatísticas
      </NavLink>
      <NavLink to='/conta/postar'>
        <ImgAdicionar/>
         Adicionar Foto
      </NavLink>
      <button onClick={userLogout}>
        <ImgSair/>
        Sair
        {''}
        </button>
    </nav>
  )
}

export default UserHeaderNav