import { useEffect, useState } from "react";

const UserStatsGraph = ({data}) => {

  const [total, setTotal] = useState(0);
  const [graph, setGraph] = useState([]);

  useEffect(()=>{
     console.log(data, 'data')
     setTotal(data.map(({acessos})=> Number(acessos)).reduce((prev, prox)=> prev + prox, 0))
  },[data])

  return <section>
    <div>
        <p>Acesso: {total}</p>
    </div>
    <div>

    </div>
  </section>;
};

export default UserStatsGraph;
