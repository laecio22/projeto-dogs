import { Link } from "react-router-dom";
import PhotoComments from "../PhotoComments/PhotoComments";
import { TitleForm } from "../../Login/LoginForm/style";
import { ContainerPhoto, ContainerDetails, ContainerImg } from "./style";
import { useContext } from "react";
import  {UserContext}  from '../../../contexts/UserContext';
import PhotoDelete from "../PhotoDelete/PhotoDelete";

const PhotoContent = ({ data }) => {
  const { comments, photo } = data;
  const user = useContext(UserContext)
    
  return (
    <ContainerPhoto>
      <ContainerImg>
        <img src={photo.src} alt={photo.title} />
      </ContainerImg>
      <ContainerDetails>
        <div>
          <p className="author">          
            {user.dataUser &&  user.dataUser.username === photo.author ? (<PhotoDelete id={photo.id}/>):  (<Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>)}           
            <span className="visualizacoes">{photo.acessos}</span>
          </p>
          <TitleForm>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </TitleForm>
          <ul className="attributes">
            <li>{photo.peso} Kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </ContainerDetails>
      <PhotoComments id={photo.id} comments={comments} />
    </ContainerPhoto>
  );
};

export default PhotoContent;
