import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import { Link, useNavigate } from "react-router-dom";
import MenuRow from "./MenuRow";
import MenuItems from "./MenuItems";
import { useContext } from "react";
import widthContext from "./widthContext";

const Navbar = () => {
  const { isWide } = useContext(widthContext);
  const navigate = useNavigate();

  const returnHome = () => {
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          onClick={returnHome}
        >
          <ComputerIcon />
        </IconButton>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          color="inherit"
          sx={{ flexGrow: 1, textDecoration: "none" }}
        >
          Tyler Clark
        </Typography>
        {isWide ? <MenuRow /> : <MenuItems />}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
