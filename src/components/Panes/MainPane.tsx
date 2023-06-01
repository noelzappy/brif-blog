import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const MainPane: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          backgroundColor: "red",
          height: "100px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "stretch",
          position: "sticky",
          top: "0",
          zIndex: "1000",
        }}
      >
        <h1>Heading</h1> <h1>Heading</h1>
      </Box>

      {new Array(50).fill(0).map((_, index) => (
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            consequuntur minima vero illo cupiditate illum, maiores dolor unde
            doloribus ratione! Tenetur maiores voluptatem praesentium. Autem sit
            repellat eligendi voluptates maxime!
          </p>
          <br />
        </div>
      ))}

      <Outlet />
    </Box>
  );
};

export default MainPane;
