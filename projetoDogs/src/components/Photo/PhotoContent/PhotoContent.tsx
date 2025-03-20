import { Link } from "react-router-dom";
import PhotoComments from "../PhotoComments/PhotoComments";
import { TitleForm } from "../../Login/LoginForm/style";

const PhotoContent = ({ data }) => {
  const { comments, photo } = data;
  
  return (
    <div>
      <div>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div>
        <div>
          <p>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span>{photo.acessos}</span>
          </p>
          <TitleForm>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </TitleForm>
          <ul>
            <li>{photo.peso} Kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
