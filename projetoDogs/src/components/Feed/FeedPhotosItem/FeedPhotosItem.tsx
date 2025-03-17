import { ItemPhoto } from "./style"

const FeedPhotosItem = ({photo}) => {
  return (
    <ItemPhoto>
      <img src={photo.src} alt={photo.title}/>
      <span>{photo.acessos}</span>   
    </ItemPhoto>
  )
}

export default FeedPhotosItem