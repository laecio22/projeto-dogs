import { useParams } from "react-router-dom"
import Feed from "../../Feed/Feed"
import { TitleForm } from "../../Login/LoginForm/style"

const UserProfile = () => {
 const{user} = useParams()

  return (
    <section className="container">
        <TitleForm>{user}</TitleForm>
        <Feed user={user}/>
    </section>
  )
}

export default UserProfile