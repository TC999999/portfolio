import { useContext } from "react";
import widthContext from "./widthContext";
import { Box, Typography, Grid2, List, ListItem } from "@mui/material";
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
            <Typography variant="body2" fontStyle={"italic"}>
              {degree}
            </Typography>
            <Typography variant="body2" fontStyle={"italic"}>
              Major in {major}
            </Typography>
            <Typography variant="body2" fontStyle={"italic"}>
              Minor in {minor}
            </Typography>
            <Typography variant="subititle2" fontStyle="italic">
              {startDate} {endDate ? `- ${endDate}` : ""}
            </Typography>
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
