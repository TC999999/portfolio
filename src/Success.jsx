import { useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Grid2, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import widthContext from "./widthContext";
import "./Success.css";

const Success = () => {
  const { isWide } = useContext(widthContext);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Grid2 container direction="column" className="success-box">
        <Grid2 container>
          <Grid2 size="grow"></Grid2>
          <Grid2
            container
            spacing={1}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Grid2>
              <Typography variant={isWide ? "h2" : "h4"}>
                Message Sent
              </Typography>
            </Grid2>
            <Grid2>
              <CheckIcon color="success" sx={{ fontSize: "70px" }} />
            </Grid2>
          </Grid2>
          <Grid2 size="grow"></Grid2>
        </Grid2>
        <Grid2 container>
          <Grid2 size="grow"></Grid2>
          <Grid2
            size={6}
            alignItems="center"
            container
            justifyContent="space-evenly"
          >
            <Box textAlign="center">
              <Typography variant="body1">
                I will reply to your message as soon as I can. If I don't reply
                within a week, please feel free to send a follow up message.
              </Typography>
            </Box>
          </Grid2>
          <Grid2 size="grow"></Grid2>
        </Grid2>
        <Grid2 container>
          <Grid2 size="grow"></Grid2>
          <Grid2
            size={6}
            alignItems="center"
            container
            justifyContent="space-evenly"
          >
            <Grid2>
              <Button id="backBtn" component={Link} to="/contact">
                Go Back to Contact Page
              </Button>
            </Grid2>
          </Grid2>
          <Grid2 size="grow"></Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Success;
