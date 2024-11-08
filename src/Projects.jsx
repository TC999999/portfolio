import { useState, useEffect, useContext } from "react";
import { Container, Box, Typography, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import widthContext from "./widthContext";
import projectList from "./projects.json";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  const [val, setVal] = useState("1");
  const { isWide } = useContext(widthContext);
  const [fullStackProjects, setFullStackProjects] = useState([]);
  const [frontEndProjects, setFrontEndProjects] = useState([]);
  const [backEndProjects, setBackEndProjects] = useState([]);
  const [otherProjects, setOtherProjects] = useState([]);

  useEffect(() => {
    setFullStackProjects(projectList.fullStackProjects);
    setFrontEndProjects(projectList.frontEndProjects);
    setBackEndProjects(projectList.backEndProjects);
    setOtherProjects(projectList.otherProjects);
  }, []);

  const handleChange = (e, target) => {
    setVal(target);
  };

  return (
    <Container>
      <Typography variant={isWide ? "h2" : "h3"}>My Projects</Typography>
      <Box className="projects-list-box">
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
                className="projectTab"
                label="Front-End Projects"
                value="1"
              />
              <Tab className="projectTab" label="Back-End Projects" value="2" />
              <Tab
                className="projectTab"
                label="Full-Stack Projects"
                value="3"
              />
              <Tab className="projectTab" label="Other Projects" value="4" />
            </TabList>
          </Box>
          {frontEndProjects.map((project) => (
            <TabPanel key={project.id} value="1">
              <ProjectCard
                projectName={project.projectName}
                startDate={project.startDate}
                completionDate={project.completionDate}
                description={project.description}
                link={project.gitHubLink}
                image={project.image ? project.image : "/unavailable.svg"}
              />
            </TabPanel>
          ))}
          {backEndProjects.map((project) => (
            <TabPanel key={project.id} value="2">
              <ProjectCard
                projectName={project.projectName}
                startDate={project.startDate}
                completionDate={project.completionDate}
                description={project.description}
                link={project.gitHubLink}
                image={project.image ? project.image : "/unavailable.svg"}
              />
            </TabPanel>
          ))}
          {fullStackProjects.map((project) => (
            <TabPanel key={project.id} value="3">
              <ProjectCard
                projectName={project.projectName}
                startDate={project.startDate}
                completionDate={project.completionDate}
                description={project.description}
                link={project.gitHubLink}
                image={project.image ? project.image : "/unavailable.svg"}
              />
            </TabPanel>
          ))}
          {otherProjects.map((project) => (
            <TabPanel key={project.id} value="4">
              <ProjectCard
                projectName={project.projectName}
                startDate={project.startDate}
                completionDate={project.completionDate}
                description={project.description}
                link={project.gitHubLink || project.pdfLink}
                notGitHub={project.gitHubLink}
                image={project.image ? project.image : "/unavailable.svg"}
              />
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </Container>
  );
};

export default Projects;
