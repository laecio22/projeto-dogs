import { useEffect, useState } from "react";
import {VictoryBar, VictoryPie, VictoryChart} from 'victory'
import { SectionGraph,GraphItem } from "./style";

const UserStatsGraph = ({data}) => {

  const [total, setTotal] = useState(0);
  const [graph, setGraph] = useState([]);

  useEffect(()=>{
    const graphData = data.map((item)=>{
       return {
        x:item.title,
        y: Number(item.acessos)
       }
    })

     setTotal(data.map(({acessos})=> Number(acessos)).reduce((prev, prox)=> prev + prox, 0))
     setGraph(graphData)
  },[data])

  return <SectionGraph>
    <GraphItem className="total">
        <p>Acesso: {total}</p>
    </GraphItem>
    <GraphItem>
       <VictoryPie data={graph} innerRadius={50} padding={{top:20, bottom:20, left:80, right:80}}
       style={{
         data: {
           fillOpacity:0.9,
           stroke:'#fff',
           strokeWidth: 2,
         },

         labels: {
            fontSize:12,
            color: '#333'
         }
       }}/>
    </GraphItem>
    <GraphItem>
        <VictoryChart>
            <VictoryBar data={graph} alignment="start" ></VictoryBar>
        </VictoryChart>
    </GraphItem>
  </SectionGraph>;
};

export default UserStatsGraph;
