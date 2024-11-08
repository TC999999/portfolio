import { Container, Typography, Grid2 } from "@mui/material";

const Error = () => {
  return (
    <Container>
      <Grid2 container spacing={3}>
        <Grid2 size="grow"></Grid2>
        <Grid2 size={6}>
          <Typography variant="h1" sx={{ textAlign: "center" }} gutterBottom>
            404 ERROR
          </Typography>
        </Grid2>
        <Grid2 size="grow"></Grid2>
      </Grid2>
      <Grid2 container spacing={3}>
        <Grid2 size="grow"></Grid2>
        <Grid2 size={7}>
          <Typography align="center" variant="h6" gutterBottom>
            The page you are looking for does not exist. Please return to the
            home page or click on an already existing link.
          </Typography>
        </Grid2>
        <Grid2 size="grow"></Grid2>
      </Grid2>
    </Container>
  );
};

export default Error;
