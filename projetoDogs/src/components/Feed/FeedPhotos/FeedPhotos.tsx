import FeedPhotosItem from "../FeedPhotosItem/FeedPhotosItem"
import useRequest from "../../../hooks/useRequest"
import {GET_PHOTOS} from '../../../api/URL.js'
import { useEffect } from "react"
import Error from "../../../helper/Error.js"
import Loading from "../../../helper/Loading.js"
import { ContainerListPhotos } from "./style.js"

const FeedPhotos = ({setModalPhoto}) => {
   const {data, loading, error, request} = useRequest()

   useEffect(()=>{
     const fetchPhotos = async() => {
        const {url, options} = GET_PHOTOS({page:1, total:6, user:0})
       const {json} = await request(url, options)
       console.log(json)
     }

     fetchPhotos()
   },[request])
  if (error) return <Error error={error}/>
  if (loading) return <Loading/>
  if (data)
      return (
    <ContainerListPhotos>
        {data.map((photo)=> {

         return <FeedPhotosItem photo={photo} key={photo.id} setModalPhoto={setModalPhoto}/>
        })}
    </ContainerListPhotos>
  )
  else return null
}

export default FeedPhotos