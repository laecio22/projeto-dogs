import { useEffect } from "react";
import useRequest from "../../../hooks/useRequest";
import { PHOTO_GET } from "../../../api/URL.js";
import Error from "../../../helper/Error.js";
import Loading from "../../../helper/Loading.js";
import PhotoContent from "../../Photo/PhotoContent/PhotoContent.js";

const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useRequest();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div>
      {error && <Error error={error}/>}
      {loading && <Loading/>}
      {data &&  <PhotoContent data={data}/> }
     
    </div>
  );
};

export default FeedModal;
