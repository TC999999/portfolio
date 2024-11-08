import { Box, Typography, Grid2 } from "@mui/material";
import { HourglassEmpty } from "@mui/icons-material";
import "./LoadingScreen.css";

const LoadingScreen = ({ message = "Loading" }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Grid2 container direction="row" id="message_sending">
        <Grid2 size="grow"></Grid2>
        <Grid2
          container
          direction="row"
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid2>
            <Box className="loading-message">
              <Grid2
                className="loading-text"
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid2>
                  <Typography variant="h2">{message}</Typography>
                </Grid2>
                <Grid2
                  container
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  <Grid2>
                    <Typography id="ell-1" variant="h2">
                      .
                    </Typography>
                  </Grid2>
                  <Grid2>
                    <Typography id="ell-2" variant="h2">
                      .
                    </Typography>
                  </Grid2>
                  <Grid2>
                    <Typography id="ell-3" variant="h2">
                      .
                    </Typography>
                  </Grid2>
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
          <Grid2>
            <Box className="loading-icon">
              <HourglassEmpty sx={{ height: 100, width: 100 }} />
            </Box>
          </Grid2>
        </Grid2>
        <Grid2 size="grow"></Grid2>
      </Grid2>
    </Box>
  );
};

export default LoadingScreen;
