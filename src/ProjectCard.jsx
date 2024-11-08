import { Box, Typography, Grid2, Link } from "@mui/material";
import "./ProjectCard.css";

const ProjectCard = ({
  projectName,
  startDate,
  completionDate,
  description,
  link,
  notGitHub,
  image,
}) => {
  return (
    <Box className="projectCard">
      <Grid2 container spacing={1} columns={16}>
        <Grid2
          size={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box className="project-image-box">
            <img src={image} alt="" />
          </Box>
        </Grid2>
        <Grid2 size={12}>
          <Box>
            <Typography variant="h4">{projectName}</Typography>
            <Typography variant="subititle2" fontStyle="italic">
              {startDate} {completionDate ? `- ${completionDate}` : ""}
            </Typography>
            <Typography variant="body1">{description}</Typography>
            {link ? (
              <Link
                variant="body1"
                fontWeight="bold"
                target="_blank"
                rel="noopener"
                href={link}
              >
                {!notGitHub
                  ? "Read My Article about this Project"
                  : "View This Project on GitHub!"}
              </Link>
            ) : (
              ""
            )}
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ProjectCard;
