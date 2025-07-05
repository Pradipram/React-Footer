import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

import "../../assets/styles/footer.css";

interface FooterProps {
  websiteName: string;
  bgColor?: string;
  style?: React.CSSProperties;
}

const Footer: React.FC<FooterProps> = ({ websiteName, bgColor, style }) => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const cssBgColor = bgColor || "#282c34";

  const footerStyle: React.CSSProperties = {
    backgroundColor: cssBgColor,
    color: "#ffffff",
    padding: "10px 20px",
    textAlign: "center",
    minHeight: "60px",
    ...style,
  };

  return (
    <div className="footer" style={footerStyle}>
      <Typography variant="body2">
        &copy; {year} {websiteName}. All rights reserved.
      </Typography>
    </div>
  );
};

export default Footer;
