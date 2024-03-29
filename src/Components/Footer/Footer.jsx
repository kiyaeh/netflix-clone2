import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./footer.css";
function Footer() {
  return (
    <div className="footer_outer-container">
      <div className="footer-inner-container">
        <div className="footer-icons">
          <FacebookIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>
        <div className="foooter_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Invester Relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li> Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contuct Us</li>
            </ul>
          </div>
        </div>
        <div className="service_code">
          <p>Service Code</p>
        </div>
        <div className="copy_write">&copy:1997-2024 Netflix,inc</div>
      </div>
    </div>
  );
}

export default Footer;
