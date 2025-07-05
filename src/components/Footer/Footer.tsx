import React from "react";
import { Typography } from "@mui/material";

import "../../assets/styles/footer.css";

interface FooterProps {
  websiteName: string;
  bgColor?: string;
  style?: React.CSSProperties;
}

const Footer: React.FC<FooterProps> = ({ websiteName, bgColor, style }) => {
  const currentYear = new Date().getFullYear();

  const footerStyle: React.CSSProperties = {
    backgroundColor: bgColor,
    ...style,
  };

  return (
    <div className="footer" style={footerStyle}>
      <Typography variant="body2">
        &copy; {currentYear} {websiteName}. All rights reserved.
      </Typography>
    </div>
  );
};

export default Footer;
