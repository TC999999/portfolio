import { Container, Box, Typography } from "@mui/material";
import { useContext } from "react";
import widthContext from "./widthContext";

const About = () => {
  const { isWide } = useContext(widthContext);

  return (
    <Container>
      <Box
        className="parentBox"
        sx={{ border: 2, borderColor: "secondary.main", margin: 2, padding: 2 }}
      >
        {isWide ? (
          <Typography
            className="largeContactHeader"
            variant="h2"
            sx={{ fontWeight: "bold" }}
          >
            About Me
          </Typography>
        ) : (
          <Typography
            className="smallContactHeader"
            variant="h4"
            sx={{ fontWeight: "bold" }}
          >
            About Me
          </Typography>
        )}
        <Typography variant="body1">
          All my life, I've always had an interest in computers and technology.
          I've enjoyed seeing how all of my favorite websites are put together
          to be used by the general public, and I also love putting together
          tools and technologies to make something greater that the sum of its
          parts. In college, I was a fast learner of topics I initially didn't
          understand at first and was able to create extraordinary projects as a
          result. I put together a PID temperature controller using a solid
          state relay, Arduino hardware, and C++. Furthermore, I recently put
          together a full stack online marketplace website using React.js,
          Express.js, and PostgreSQL. I am able to collect data not only from
          the average user, but from other hardware as well to save and use.
        </Typography>
        <br />
        <Typography variant="body1">
          At present, I am interetested in a junior software engineer/developer
          role, with an emphasis in backend development. I am able to sort user
          information using SQL queries instead of sorting algorithms. This way,
          if a site reccomends a product or page to a user, the sorting is done
          before the information arrives at the frontend. For those who are
          interested, please feel free to connect with me or contact me with the
          provided contact details.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
