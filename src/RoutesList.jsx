import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import EmailForm from "./EmailForm";
import Certifications from "./Certifications";
import Error from "./Error";

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/skills" exact element={<Skills />} />
      <Route path="/projects" exact element={<Projects />} />
      <Route path="/contact" exact element={<Contact />} />
      <Route path="/contact/sendmessage" exact element={<EmailForm />} />
      <Route path="/certifications" exact element={<Certifications />} />
      <Route path="*" exact element={<Error />} />
    </Routes>
  );
};

export default RoutesList;
