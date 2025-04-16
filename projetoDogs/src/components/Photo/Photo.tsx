import { useParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { useEffect } from "react";
import {GET_PHOTO} from '../../api/URL.js';
import  Error  from '../../helper/Error.js';
import Loading from "../../helper/Loading.js";
import PhotoContent from "./PhotoContent/PhotoContent";
import Head from "../../helper/Head.js";

const Photo = () => {
  const{id} = useParams()
  const {request, loading,error, data} = useRequest()

  useEffect(()=>{
   const {url, options} = GET_PHOTO(id)
   request(url,options)
  },[request,id])

  if(error) return <Error error={error}/>
  if(loading) return <Loading/>
  if (data) 
  return <section className="container">
    <Head title={data.photo.title}/>
     <PhotoContent data={data} single={true}/>
  </section>;
  else return null


};

export default Photo;
