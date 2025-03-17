import UserHeader from "./UserHeader/UserHeader"
import { Route, Routes } from "react-router-dom"
import { SectionContainerUser } from "./style"
import UserPhotoPost from "./UserPhotoPost/UserPhotoPost"
import UserStats from "./UserStats/UserStats"
import Feed from "../Feed/Feed"

const User = () => {
  return (
    <SectionContainerUser className="container" >
      <UserHeader/>
      <Routes>
        <Route path="/"  element={<Feed/>}/>
        <Route path="postar" element={<UserPhotoPost/>}/>
        <Route path="estatisticas" element={<UserStats/>}/>
      </Routes>
    </SectionContainerUser>
  )
}

export default User