import React, { useEffect, useState } from "react";
import "./header.css";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/images/Netflix_Logo_CMYK.png";
function Header() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        handleShow(false);
      });
    };
  }, []);
  return (
    <div className={`header_outer-container ${show && "navBlack"}`}>
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={logo} alt="" width="100" />
            </li>
            <li>Home</li>
            <li>TVshows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Mylists</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneOutlinedIcon />
            </li>
            <li>
              <AccountBoxOutlinedIcon />
            </li>
            <li>
              <ArrowDropDownCircleOutlinedIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
