import FeedPhotosItem from "../FeedPhotosItem/FeedPhotosItem"
import useRequest from "../../../hooks/useRequest"
import {GET_PHOTOS} from '../../../api/URL.js'
import { useEffect } from "react"
import Error from "../../../helper/Error.js"
import Loading from "../../../helper/Loading.js"
import { ContainerListPhotos } from "./style.js"


const FeedPhotos = ({setModalPhoto, user, page, setInfinite}) => {
   const {data, loading, error, request} = useRequest()

   useEffect(()=>{
     const fetchPhotos = async() => {
        const {url, options} = GET_PHOTOS({page, total:3, user})
       const {response,json} = await request(url, options)
       console.log('requset',json)
       if(response && response.ok && json.length < 3) setInfinite(false)
     }

     fetchPhotos()
   },[request, user,page])
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