import { Box, Typography, Grid2 } from "@mui/material";
import { useContext } from "react";
import widthContext from "./widthContext";
import "./SkillCard.css";

const SkillCard = ({ skillName, description, icon }) => {
  const { isWide } = useContext(widthContext);
  return (
    <Box className="skillCard">
      <Grid2 container spacing={1} columns={16}>
        <Grid2 size={4}>
          <img src={icon} alt="" />
        </Grid2>
        <Grid2 size={12}>
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
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default SkillCard;
