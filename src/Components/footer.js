

import React from "react";

function Footer(props) {
  return (
    <div>
      <footer
        className="footer mt-auto py-3"
        style={{ backgroundColor: "skyblue" }}
      >
        <div className="container">
          <span className="text-muted">&copy; MapUI</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;


