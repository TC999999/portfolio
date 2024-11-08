import { useState, useEffect, useContext } from "react";
import { Container, Box, Tab, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import SkillCard from "./SkillCard";
import SoftSkillCard from "./SoftSkillCard";
import LoadingScreen from "./LoadingScreen";
import skillList from "./skills.json";
import widthContext from "./widthContext";
import "./Skills.css";

const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isWide } = useContext(widthContext);
  const [val, setVal] = useState("1");
  const [frontEndSkillData, setFrontEndSkillData] = useState([]);
  const [backEndSkillData, setBackEndSkillData] = useState([]);
  const [fullStackSkillData, setFullStackSkillData] = useState([]);
  const [otherSkillData, setOtherSkillData] = useState([]);
  const [softSkillData, setSoftSkillData] = useState([]);

  useEffect(() => {
    setFrontEndSkillData(skillList.frontEndTechnicalSkills);
    setBackEndSkillData(skillList.backEndTechnicalSkills);
    setFullStackSkillData(skillList.fullStackTechnicalSkills);
    setOtherSkillData(skillList.otherTechnicalSkills);
    setSoftSkillData(skillList.softSkills);
    setIsLoading(false);
  }, []);

  const handleChange = (e, target) => {
    setVal(target);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <Container>
      <Typography variant={isWide ? "h2" : "h3"}>My Skills</Typography>
      <Box className="skill-list-box">
        <TabContext value={val}>
          <Box>
            <TabList
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              indicatorColor="primary"
              textColor="primary"
              className="tab-list"
            >
              <Tab
                className="skillTab"
                label="Front-end Technical Skills"
                value="1"
              />
              <Tab
                className="skillTab"
                label="Back-end Technical Skills"
                value="2"
              />
              <Tab
                className="skillTab"
                label="Full-stack Technical Skills"
                value="3"
              />
              <Tab
                className="skillTab"
                label="Other Technical Skills"
                value="4"
              />
              <Tab className="skillTab" label="Soft Skills" value="5" />
            </TabList>
          </Box>
          {frontEndSkillData.map((skill) => (
            <TabPanel key={skill.id} value="1">
              <SkillCard
                skillName={skill.skillName}
                description={skill.description}
                icon={skill.icon ? skill.icon : "../public/unavailable.svg"}
              />
            </TabPanel>
          ))}
          {backEndSkillData.map((skill) => (
            <TabPanel key={skill.id} value="2">
              <SkillCard
                skillName={skill.skillName}
                description={skill.description}
                icon={skill.icon ? skill.icon : "../public/unavailable.svg"}
              />
            </TabPanel>
          ))}
          {fullStackSkillData.map((skill) => (
            <TabPanel key={skill.id} value="3">
              <SkillCard
                skillName={skill.skillName}
                description={skill.description}
                icon={skill.icon ? skill.icon : "../public/unavailable.svg"}
              />
            </TabPanel>
          ))}
          {otherSkillData.map((skill) => (
            <TabPanel key={skill.id} value="4">
              <SoftSkillCard
                skillName={skill.skillName}
                description={skill.description}
              />
            </TabPanel>
          ))}

          {softSkillData.map((skill) => (
            <TabPanel key={skill.id} value="5">
              <SoftSkillCard
                skillName={skill.skillName}
                description={skill.description}
              />
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </Container>
  );
};

export default Skills;
