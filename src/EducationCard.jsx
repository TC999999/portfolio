import { useContext } from "react";
import widthContext from "./widthContext";
import { Box, Typography, Grid2, List, ListItem, Link } from "@mui/material";
import "./EducationCard.css";

const EducationCard = ({
  university,
  startDate,
  endDate,
  degree,
  major,
  minor,
  image,
  description,
  transcript,
  GPA,
  relevantClasses,
}) => {
  const { isWide } = useContext(widthContext);

  return (
    <Box className="educationCard">
      <Grid2 container spacing={1} columns={16}>
        <Grid2
          size={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box className="certification-image-box">
            <img src={image} alt="" />
          </Box>
        </Grid2>
        <Grid2 size={12}>
          <Box>
            <Typography
              variant={isWide ? "h4" : "h6"}
              sx={{ textDecoration: "underline" }}
            >
              {university}
            </Typography>
            <Box>
              <Typography variant="body1" fontStyle={"italic"}>
                {degree}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" fontStyle={"italic"}>
                Major in {major}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" fontStyle={"italic"}>
                Minor in {minor}
              </Typography>
            </Box>
            <Box>
              <Typography variant="subititle2" fontStyle="italic">
                {startDate} {endDate ? `- ${endDate}` : ""}
              </Typography>
            </Box>
            <Box>
              <Typography variant="subititle1" fontStyle="italic">
                Average GPA: {GPA}
              </Typography>
            </Box>

            <Typography variant="body1">{description}</Typography>
            {/* <Link
              variant="body1"
              fontWeight="bold"
              target="_blank"
              rel="noopener"
              href={link}
            >
              View This Certification
            </Link> */}
          </Box>
        </Grid2>
      </Grid2>
      <Box>
        <List>
          {relevantClasses.map((c) => {
            return (
              <ListItem key={c.id}>
                <Box className="classBox">
                  <Typography variant="h6">{c.name}</Typography>
                  <Typography variant="subititle2" fontStyle="italic">
                    {c.startDate}-{c.endDate}
                  </Typography>
                  <Typography variant="body2">{c.description}</Typography>
                  {c.link ? (
                    <Link
                      variant="body1"
                      fontWeight="bold"
                      target="_blank"
                      rel="noopener"
                      href={c.link}
                    >
                      See The Poster I Presented
                    </Link>
                  ) : (
                    ""
                  )}
                </Box>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default EducationCard;
