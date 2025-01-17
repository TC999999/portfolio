import { Container, Typography, Box, Link } from "@mui/material";
import ContactBox from "./ContactBox";
import ContactLinkBox from "./ContactLinkBox";
import { useContext } from "react";
import widthContext from "./widthContext";
import "./Contact.css";

const Contact = () => {
  const { isWide } = useContext(widthContext);
  return (
    <Container>
      <Box className="parentBox">
        <Typography className="contactHeader" variant={isWide ? "h2" : "h4"}>
          Contact Details
        </Typography>

        <ContactBox
          description={"My Work Email is at"}
          details={" twclarkwork@gmail.com"}
        />
        <ContactBox
          description={"My Personal Cell Phone Number is"}
          details={"  (904) 864-1215"}
        />
        <ContactLinkBox
          websiteName={"LinkedIn"}
          link={"https://www.linkedin.com/in/twcjswe/"}
        />
        <ContactLinkBox
          websiteName={"GitHub"}
          link={"https://github.com/TC999999"}
        />
        <Box className="sendMessLink">
          <Link sx={{ fontSize: "large" }} href="/contact/sendmessage">
            Send me an Email!
          </Link>
        </Box>
      </Box>
    </Container>
  );
};
export default Contact;
