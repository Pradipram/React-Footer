import React from "react";
import { Typography } from "@mui/material";

import "../../assets/styles/footer.scss";

interface FooterProps {
  websiteName: string;
  bgColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Footer: React.FC<FooterProps> = ({
  websiteName,
  bgColor,
  className,
  style,
}) => {
  const currentYear = new Date().getFullYear();

  const footerStyle: React.CSSProperties = {
    backgroundColor: bgColor,
    ...style,
  };

  return (
    <footer className={`footer ${className}`} style={footerStyle}>
      <Typography style={{ textAlign: "center" }}>
        &copy; {currentYear} {websiteName}. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
