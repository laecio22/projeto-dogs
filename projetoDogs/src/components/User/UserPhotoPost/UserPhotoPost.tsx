import { useEffect, useState } from "react";
import useForm from "../../../hooks/useForm";
import Button from "../../Forms/Button/Button";
import Input from "../../Forms/Input/Input";
import { SectionFormPostFoto, ContainerPreviewImg } from "./style";
import useRequest from "../../../hooks/useRequest";
import { PHOTO_POST } from "../../../api/URL.js";
import React from "react";
import Error from "../../../helper/Error.js";
import { useNavigate } from "react-router-dom";
import Head from "../../../helper/Head.js";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState({});
  const { data, loading, error, request } = useRequest();
  const  navigate = useNavigate()

  useEffect(()=>{
        if (data) navigate('/conta')
  }, [data, navigate])

  const handleSubmitFoto = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
   
    formData.append("img", img.raw);
    formData.append("nome", nome.value);    
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");  
    const { url, options } = PHOTO_POST(formData, token);

    request(url, options);
  };

  const handleChangeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImg({
      previewImg: URL.createObjectURL(event.target.files[0]),
      raw: event.target.files[0],
    });
  };
  return (
    <SectionFormPostFoto>
      <Head title="Poste  sua  foto"/>
      <form onSubmit={handleSubmitFoto}>
        <Input type="text" name="nome" label="Nome" {...nome} />
        <Input type="number" name="peso" label="Peso" {...peso} />
        <Input type="number" name="idade" label="Idade" {...idade} />
        <input type="file" name="img" id="img" onChange={handleChangeImg} />
        {loading ?   <Button disabled>Enviando...</Button>:   <Button>Salvar</Button>}
        <Error error={error}   />
      
      </form>
      {img.previewImg && <ContainerPreviewImg style={{backgroundImage:`url(${img.previewImg})`}}></ContainerPreviewImg>}
    </SectionFormPostFoto>
  );
};

export default UserPhotoPost;
