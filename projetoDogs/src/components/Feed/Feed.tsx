import { useEffect, useState } from "react";
import FeedModal from "./FeedModal/FeedModal";
import FeedPhotos from "./FeedPhotos/FeedPhotos";
import { IUser } from "../../types/IUser";
import {  IDataPhoto } from "../../types/IDataPhoto";

const Feed = ({ user }: IUser) => {
  const [modalPhoto, setModalPhoto] = useState<IDataPhoto | null>(null);
  const [pages, setPages] = useState([1, 2]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    let wait = false;
    const infiniteScroll = () => {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll < height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    };
    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);

  return (
    <section className="container">
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          setModalPhoto={setModalPhoto}
          user={user}
          page={page}
          key={page}
          setInfinite={setInfinite}
        />
      ))}
    </section>
  );
};

export default Feed;
