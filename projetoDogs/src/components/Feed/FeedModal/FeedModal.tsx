import { useEffect } from "react";
import useRequest from "../../../hooks/useRequest";
import { PHOTO_GET } from "../../../api/URL.js";
import Error from "../../../helper/Error.js";
import Loading from "../../../helper/Loading.js";
import PhotoContent from "../../Photo/PhotoContent/PhotoContent.js";
import { ContainerModal } from "./style.js";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useRequest();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  const handleOutsideClick = (event) => {
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
