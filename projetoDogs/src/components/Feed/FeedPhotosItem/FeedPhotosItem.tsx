import { ItemPhoto } from "./style"
import Image from "../../../helper/Image"

const FeedPhotosItem = ({photo, setModalPhoto}) => {

  const handleClickPhoto = () => {   
    setModalPhoto(photo)
  }
  return (
    <ItemPhoto  onClick={handleClickPhoto}>
      <Image src={photo.src} alt={photo.title}/>     
      <span>{photo.acessos}</span>   
    </ItemPhoto>
  )
}

export default FeedPhotosItem