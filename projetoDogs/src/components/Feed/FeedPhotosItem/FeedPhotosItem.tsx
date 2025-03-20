import { ItemPhoto } from "./style"

const FeedPhotosItem = ({photo, setModalPhoto}) => {

  const handleClickPhoto = () => {   
    setModalPhoto(photo)
  }
  return (
    <ItemPhoto  onClick={handleClickPhoto}>
      <img src={photo.src} alt={photo.title}/>
      <span>{photo.acessos}</span>   
    </ItemPhoto>
  )
}

export default FeedPhotosItem