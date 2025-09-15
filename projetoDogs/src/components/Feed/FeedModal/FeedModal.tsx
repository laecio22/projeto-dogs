import { useEffect } from "react";
import useRequest from "../../../hooks/useRequest";
import { PHOTO_GET } from "../../../api/URL.js";
import Error from "../../../helper/Error.js";
import Loading from "../../../helper/Loading.js";
import PhotoContent from "../../Photo/PhotoContent/PhotoContent.js";
import { ContainerModal } from "./style.js";

interface IFeedModalProps {   
  photo: {
    id: string;
    src: string;
    title: string;
    peso: string;
    idade: string;
    acessos: number;
    date: string;     
  },
  setModalPhoto: (photo: null) => void;
}

const FeedModal = ({ photo, setModalPhoto }:IFeedModalProps) => {
  const { data, error, loading, request } = useRequest();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
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
