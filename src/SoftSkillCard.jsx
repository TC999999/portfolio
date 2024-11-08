import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import widthContext from "./widthContext";
import "./SkillCard.css";

const SoftSkillCard = ({ skillName, description }) => {
  const { isWide } = useContext(widthContext);
  return (
    <Box className="skillCard">
      <Box>
        <Typography variant="h5" sx={{ textDecoration: "underline" }}>
          {skillName}
        </Typography>
        <Typography
          sx={{ fontFamily: "Times New Roman" }}
          variant={isWide ? "h6" : "body1"}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default SoftSkillCard;
