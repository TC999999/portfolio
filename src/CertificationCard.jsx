import { useContext } from "react";
import { Box, Typography, Link, Grid2 } from "@mui/material";
import "./CertificationCard.css";
import widthContext from "./widthContext";

const CertificationCard = ({
  title,
  startDate,
  completionDate,
  description,
  issuer,
  link,
  image,
}) => {
  const { isWide } = useContext(widthContext);
  return (
    <Box className="certificationCard">
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
            <Typography variant={isWide ? "h4" : "h6"}>{title}</Typography>
            <Typography variant="body2">Issued By {issuer}</Typography>
            <Typography variant="subititle2" fontStyle="italic">
              {startDate} {completionDate ? `- ${completionDate}` : ""}
            </Typography>
            <Typography variant="body1">{description}</Typography>
            <Link
              variant="body1"
              fontWeight="bold"
              target="_blank"
              rel="noopener"
              href={link}
            >
              View This Certification
            </Link>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default CertificationCard;
