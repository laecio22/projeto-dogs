import Head from "../../helper/Head";
import Feed from "../Feed/Feed";
const Home = () => {
  return (
    <section className="mainContainer">
      <Head title="Fotos" description="Home  do  site  Dogs,  com  o feed de  fotos"/>
      <Feed />
    </section>
  );
};

export default Home;
