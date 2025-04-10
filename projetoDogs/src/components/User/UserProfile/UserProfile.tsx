import { useParams } from "react-router-dom";
import Feed from "../../Feed/Feed";
import { TitleForm } from "../../Login/LoginForm/style";
type User = string | number;

interface IUser {
  user: User;
}

const UserProfile = () => {
  const { user }: IUser = useParams();

  return (
    <section className="container">
      <TitleForm>{user}</TitleForm>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
