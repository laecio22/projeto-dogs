import { useState } from "react";
import FeedModal from "./FeedModal/FeedModal";
import FeedPhotos from "./FeedPhotos/FeedPhotos";

const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null);
  return (
    <section className="container">
      {modalPhoto && <FeedModal photo={modalPhoto} />}

      <FeedPhotos setModalPhoto={setModalPhoto} />
    </section>
  );
};

export default Feed;
