import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Typography variant="h2">This is Home component</Typography>
      <Link to={"/test"}>Go to the test page</Link>
    </div>
  );
};

export default Home;
