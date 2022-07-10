import Head from "next/head";

import Sidebar from "../components/Sidebar"

const Home = () => {

  return (
    <div className="">
      <Head>
        <title>Spotify - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
    </div>
  );

}

export default Home;