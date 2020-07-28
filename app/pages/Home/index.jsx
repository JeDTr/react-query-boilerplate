import React from "react";

import { useAuthContext } from "@/contexts/AuthContext";

const Home = () => {
  const auth = useAuthContext();

  return <div>{JSON.stringify(auth, null, 2)}</div>;
};

export default Home;
