import { useEffect } from "react";
import Head from "../../../helper/Head";
import useRequest from "../../../hooks/useRequest";
import {GET_STATISTICS} from '../../../api/URL';
import Loading from "../../../helper/Loading";
import Error from "../../../helper/Error";
import UserStatsGraph from "../UserStatsGraph/UserStatsGraph";

const UserStats = () => {
  const { data, error, loading, request } = useRequest();

  useEffect(() => {
    const getStats = async() => {
      const token = window.localStorage.getItem('token')
       const {url,options} = GET_STATISTICS(token)
      await request(url, options)
    }
    getStats()

  }, [request]);

  if(loading) return <Loading/>
  if(error) return <Error error={error}/>
  if (data) 
  return (
    <section>
      <Head title="Estatísticas" />
      <UserStatsGraph data={data}/>
    </section>
  );
  else return null
};

export default UserStats;
