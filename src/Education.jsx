import { useState, useEffect, useContext } from "react";
import widthContext from "./widthContext";
import EducationCard from "./EducationCard";
import { Box, Typography } from "@mui/material";
import eList from "./education.json";

const Education = () => {
  const { isWide } = useContext(widthContext);
  const [educationList, setEducationList] = useState([]);

  useEffect(() => {
    setEducationList(eList.education);
  }, []);

  return (
    <Box className="educationPage">
      <Typography variant={isWide ? "h2" : "h4"}>Education</Typography>
      <Box className="educationList">
        {educationList.map((e) => {
          return (
            <EducationCard
              key={e.id}
              university={e.university}
              startDate={e.startDate}
              endDate={e.endDate}
              degree={e.degree}
              major={e.major}
              minor={e.minor}
              description={e.description}
              GPA={e.GPA}
              transcript={e.transcript}
              image={e.image ? e.image : "/unavailable.svg"}
              relevantClasses={e.relevantClasses}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Education;
