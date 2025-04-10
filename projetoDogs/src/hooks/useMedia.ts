import { useEffect, useState } from "react";

const useMedia = (media:string) => {
  const [match, setMatch] = useState<null | boolean>(null);

  useEffect(() => {
    const changeMedia = () => {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    };
    changeMedia()
    window.addEventListener("resize", changeMedia);
    return () => {
      window.removeEventListener("resize", changeMedia);
    };
  }, [media]);

  return match
};

export default useMedia;
