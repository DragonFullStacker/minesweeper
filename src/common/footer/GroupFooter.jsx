import React from "react";
import Footer from "./Footer";
import FooterBar from "./FooterBar";
import "./footer.css"

function GroupFooter() {
  return (
    <div className="footer-main">
      <div className="">
        <Footer />
        <FooterBar />
      </div>
    </div>
  );
}

export default GroupFooter;
