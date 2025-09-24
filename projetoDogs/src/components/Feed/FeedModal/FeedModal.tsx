import { useEffect } from "react";
import useRequest from "../../../hooks/useRequest";
import { PHOTO_GET } from "../../../api/URL.js";
import Error from "../../../helper/Error.js";
import Loading from "../../../helper/Loading.js";
import PhotoContent from "../../Photo/PhotoContent/PhotoContent.js";
import { ContainerModal } from "./style.js";
import { IDataPhoto } from "../../../types/IDataPhoto.js";

interface IFeedModalProps {   
  photo:IDataPhoto,
  setModalPhoto: (photo: null) => void;
}

const FeedModal = ({ photo, setModalPhoto }:IFeedModalProps) => {
  const { data, error, loading, request } = useRequest();
  console.log(photo, "photo");

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.photo.id);
    request(url, options);
  }, [photo, request]);

  const handleOutsideClick = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
   
    if (event.target === event.currentTarget) setModalPhoto(null);
  };

  return (
    <ContainerModal onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </ContainerModal>
  );
};

export default FeedModal;
