import React, { Component } from "react";

const Footer = ({ children, ...props }) => {
  return <footer {...props}>{children}</footer>;
};

export default Footer;
