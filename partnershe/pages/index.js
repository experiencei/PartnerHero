import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

import Dashboard from "../components/Dashboard";
import Loader from "../components/Loader";

export default function Home() {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });

  // console.log(session.user.email);
  // Loading animation...
  if (status === "loading") {
    return <Loader />;
  }

  return (
    <div className="">
      <Head>
        <title>Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
      <ToastContainer autoClose={2000} />

    </div>
  );
}
