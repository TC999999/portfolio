import { useState, useEffect, useContext } from "react";
import { Box, Typography } from "@mui/material";
import CertificationCard from "./CertificationCard";
import certificationList from "./certifications.json";

import widthContext from "./widthContext";

const Certifications = () => {
  const { isWide } = useContext(widthContext);

  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    setCertifications(certificationList.certifications);
  });
  return (
    <Box>
      <Typography variant={isWide ? "h2" : "h4"} sx={{ padding: 2 }}>
        Certifications
      </Typography>
      <Box>
        {certifications.map((c) => {
          return (
            <CertificationCard
              key={c.id}
              title={c.title}
              startDate={c.startDate}
              completionDate={c.completionDate}
              description={c.description}
              issuer={c.issuer}
              link={c.link}
              image={c.image}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Certifications;
