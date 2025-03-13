import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import ImgMinhasFotos from "../../../assets/feed.svg?react";
import ImgEstatisticas from "../../../assets/estatisticas.svg?react";
import ImgAdicionar from "../../../assets/adicionar.svg?react";
import ImgSair from "../../../assets/sair.svg?react";
import { Nav,MobileButton } from "./style";
import useMedia from "../../../hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia("(max-width:40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const {pathname} =  useLocation();

  useEffect(()=> {
      setMobileMenu(false)
  }, [pathname])

  const handleLogout = () => {
    userLogout();
    navigate("/login");
  };

  return (
    <>
      {mobile && (
        <MobileButton
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${mobileMenu && 'menuMobileActive'}`}
        ></MobileButton>
      )}

      <Nav className={`${mobile ? 'navMobile': 'nav'} ${mobileMenu && 'navMobileActive'}`}>
        <NavLink to="/conta" end >
          <ImgMinhasFotos />
          {mobile && "Minhas  Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <ImgEstatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <ImgAdicionar />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={handleLogout}>
          <ImgSair />
          {mobile && "Sair"}
        </button>
      </Nav>
    </>
  );
};

export default UserHeaderNav;
