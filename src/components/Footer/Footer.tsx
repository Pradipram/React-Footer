"use client";
import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

import "../../assets/styles/footer.css";

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
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  const footerStyle: React.CSSProperties = {
    backgroundColor: bgColor,
    ...style,
  };

  return (
    <div className={`footer ${className}`} style={footerStyle}>
      <Typography variant="body2">
        &copy; {year} {websiteName}. All rights reserved.
      </Typography>
    </div>
  );
};

export default Footer;
