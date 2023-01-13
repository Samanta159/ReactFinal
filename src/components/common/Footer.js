import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4">
      <div className="footer-copyright text-center py-3">
        © 2023 Copyright:
        <Link to="#"> Morelos, Mexico</Link>
      </div>
    </footer>
  );
};

export default Footer;
