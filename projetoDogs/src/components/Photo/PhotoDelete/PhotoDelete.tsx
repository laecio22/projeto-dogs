
import {PHOTO_DELETE} from '../../../api/URL.js';
import useRequest from '../../../hooks/useRequest.js';
import { ButtonDelete } from './style.js';

const PhotoDelete = ({id}) => {
  
 const { loading, request} =  useRequest() 

 const handleClick = async () => {
  const  confirm =   window.confirm('Tem certeza  que  vai  deletar  essa  foto?')
  if (confirm) {
      const token = window.localStorage.getItem('token')
      const {url, options} = PHOTO_DELETE(id, token)
      const { response} =  await request(url,options)
   
      if (response.ok) window.location.reload()

  }
   
}

  return (
    <>
        {loading ?    <ButtonDelete disabled>Deletar</ButtonDelete> : <ButtonDelete onClick={handleClick}>Deletar</ButtonDelete>}
      
    </>
  )
}

export default PhotoDelete