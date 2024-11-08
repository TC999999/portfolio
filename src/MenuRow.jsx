import { Link } from "react-router-dom";
import { Stack, Button } from "@mui/material";

const MenuRow = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="inherit" component={Link} to="/about">
        About
      </Button>
      <Button color="inherit" component={Link} to="/skills">
        Skills
      </Button>
      <Button color="inherit" component={Link} to="/projects">
        Projects
      </Button>
      <Button color="inherit" component={Link} to="/contact">
        Contact
      </Button>
      <Button color="inherit" component={Link} to="/certifications">
        Certifications
      </Button>
      <Button color="inherit">Blog</Button>
    </Stack>
  );
};

export default MenuRow;
