import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const LeftPane: React.FC = () => {
  return (
    <Box sx={{}}>
      {new Array(500).fill(0).map((_, index) => (
        <div>
          <Link to={`/category/${index}`}>Category {index}</Link>
        </div>
      ))}
    </Box>
  );
};

export default LeftPane;
