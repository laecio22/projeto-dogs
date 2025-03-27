import { useState } from "react";
import ImgEnviar from "../../../assets/enviar.svg?react";
import useRequest from "../../../hooks/useRequest";
import { COMMENT_POST } from "../../../api/URL.js";
import { FormCommentPhoto } from "./style.js";
import Error from "../../../helper/Error.js";

const PhotoCommentForm = ({ id, setComments }) => {
  const [comment, setComment] = useState("");

  const { request, error } = useRequest();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const token = window.localStorage.getItem("token");
    const { url, options } = COMMENT_POST(id, token, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  };
  return (
    <FormCommentPhoto onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        id="comment"
        name="comment"
        placeholder="Comente..."
      />
      <button>
        <ImgEnviar />
      </button>
      <Error error={error}/>
    </FormCommentPhoto>
  );
};

export default PhotoCommentForm;
