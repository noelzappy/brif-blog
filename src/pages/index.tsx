import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Container } from "@mui/material";
import LeftPane from "../components/Panes/LeftPane";
import MainPane from "../components/Panes/MainPane";
import RightPane from "../components/Panes/RightPane";

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: theme.palette.background.default,
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
      }}
    >
      <LeftPane />
      <MainPane />
      {isMobile ? null : <RightPane />}
    </Container>
  );
};

export default Home;
