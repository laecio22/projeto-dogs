
const Error = ({error}) => {
  if(!error) return null
  return (
    <div style={{margin:'1rem 0' ,color:'#a10'}}>
        {error}
    </div>
  )
}

export default Error