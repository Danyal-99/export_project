import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const TestComponent = () => {
  return (
    <div>
      <Typography variant="h2">This is test component</Typography>
      <Link to={"/"}>go to home</Link>
    </div>
  );
};

export default TestComponent;
