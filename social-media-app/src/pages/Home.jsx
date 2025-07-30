import React from "react";
import { getUser } from "../hooks/user.actions";
import Layout from "../components/Layout";

function Home() {
  const user = getUser();

  if (!user) {
    return <div>Loading!</div>;
  }

  return (
    <Layout>
    <div>
      <h1>Profile</h1>
      <p>Welcome!</p>
    </div>
    </Layout>
  );
}

export default Home;