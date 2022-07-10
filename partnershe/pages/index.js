import Head from "next/head";

import Dashboard from "../components/Dashboard"

const Home = () => {

  return (
    <div className="">
      <Head>
        <title>Spotify - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </div>
  );

}

export default Home;