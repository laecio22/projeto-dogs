import FeedModal from "./FeedModal/FeedModal"
import FeedPhotos from "./FeedPhotos/FeedPhotos"

const Feed = () => {
  return (
    <section className="container">
      <FeedModal/>
      <FeedPhotos/>
    </section>
  )
}

export default Feed