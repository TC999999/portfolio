import { Typography, Box } from "@mui/material";

const ContactBox = ({ description, details }) => {
  return (
    <Box className="contactBox">
      <Typography component="div" variant="body1">
        {description}
        <b>{details}</b>
      </Typography>
    </Box>
  );
};

export default ContactBox;
