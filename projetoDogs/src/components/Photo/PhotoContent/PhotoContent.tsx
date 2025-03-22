import { Link } from "react-router-dom";
import PhotoComments from "../PhotoComments/PhotoComments";
import { TitleForm } from "../../Login/LoginForm/style";
import { ContainerPhoto, ContainerDetails, ContainerImg } from "./style";

const PhotoContent = ({ data }) => {
  const { comments, photo } = data;
  
  return (
    <ContainerPhoto>
      <ContainerImg>
        <img src={photo.src} alt={photo.title} />
      </ContainerImg>
      <ContainerDetails>
        <div>
          <p className="author">
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
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
