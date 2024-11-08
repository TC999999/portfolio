import { Typography, Box, Link } from "@mui/material";

const ContactLinkBox = ({ websiteName, link }) => {
  return (
    <Box className="contactBox">
      <Typography component="div" variant="body1">
        Visit my {websiteName} page at{" "}
        <Link
          variant="body1"
          fontWeight="bold"
          target="_blank"
          rel="noopener"
          href={link}
          color="inherit"
        >
          {link}
        </Link>
      </Typography>
    </Box>
  );
};

export default ContactLinkBox;
