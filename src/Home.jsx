import { useContext } from "react";
import widthContext from "./widthContext";
import { Container, Typography, Box, Grid2 } from "@mui/material";
import coverPhoto from "/newCoverPhoto.jpg";
import "./Home.css";

const Home = () => {
  const { isWide } = useContext(widthContext);

  return (
    <Container sx={{ margin: 2 }}>
      <Box
        sx={{
          border: 2,
          borderColor: "green",
          padding: 5,
          backgroundColor: "rgba(0,255,0,0.2)",
          borderRadius: 20,
          marginBottom: 5,
        }}
      >
        <Grid2
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          className="Intro-Box"
        >
          <Grid2 className="Picture-Box">
            <Box>
              <img id="coverPhoto" src={coverPhoto} />
            </Box>
          </Grid2>
          <Grid2 className="Hello-Box">
            <Box sx={{ textAlign: "center" }}>
              <Box>
                <Typography variant={isWide ? "h3" : "h6"}>
                  Hello, My Name is Tyler Clark{" "}
                </Typography>
                <Typography variant={isWide ? "body1" : "subtitle2"}>
                  Junior Software Engineer
                </Typography>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>

      <Box
        sx={{
          border: 2,
          borderColor: "cerulean",
          padding: 10,
          backgroundColor: "rgba(0,0,255,0.2)",
          borderRadius: 20,
        }}
      >
        <Box>
          <Typography variant={isWide ? "h4" : "h6"}>
            A Brief Introduction
          </Typography>
          <Typography variant={isWide ? "body1" : "body2"}>
            I am a budding junior software developer who wants to and enjoys
            creating efficient apps and technologies for users to enjoy and
            experience while looking for a challenge. I am a fast learner who
            enjoys figuring out solutions and learning new technologies to
            difficult problems and is willing to help those in need while also
            not afraid to ask for help as well.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
