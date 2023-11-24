import Head from "next/head";
import { Fragment, useContext, useState } from "react";
import Context from "../context/context";
import SocialIcon from "./SocialIcon";
import TypingAnimation from "./TypingAnimation";
const Home4Start = () => {
  const [menu, setMenu] = useState(false);
  const { changeNav, nav, changeSideBar } = useContext(Context);
  return (
    <Fragment>
      <Head>
        <a rel="stylesheet" href="css/new-skin/new-skin.css" />
        <a rel="stylesheet" href="css/demos/demo-4-colors.css" />
      </Head>{" "}
      <div className="card-started" id="home-card">
        {/*
Profile
*/}
        <div className={`profile no-photo ${menu ? "default-menu-open" : ""}`}>
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(images/profile3.jpg)" }}
          />
          {/* profile titles */}
          <div className="title">Jason Allen</div>
          {/*<div className="subtitle">Web Designer</div>*/}
          <TypingAnimation data={["Designer", "Photographer", "Artist"]} />
          {/* profile socials */}
          <SocialIcon />
          {/* default menu */}
          <div className="main-menu-fixed">
            <div className="main-menu">
              <div className="menu-main-menu-container">
                <ul className="menu">
                  <li
                    className={`menu-item ${
                      nav === "about"
                        ? "current-menu-item current_page_item"
                        : ""
                    } `}
                  >
                    <a
                      onClick={() => {
                        setMenu(false);
                        changeNav("about");
                      }}
                      href="#"
                    >
                      <span className="icon ion-ios-person" />
                      About
                    </a>
                  </li>
                  <li
                    className={`menu-item ${
                      nav === "resume"
                        ? "current-menu-item current_page_item"
                        : ""
                    } `}
                  >
                    <a
                      onClick={() => {
                        setMenu(false);
                        changeNav("resume");
                      }}
                      href="#-resume"
                    >
                      <span className="icon ion-android-list" />
                      Resume
                    </a>
                  </li>
                  <li
                    className={`menu-item ${
                      nav === "works"
                        ? "current-menu-item current_page_item"
                        : ""
                    } `}
                  >
                    <a
                      onClick={() => {
                        setMenu(false);
                        changeNav("works");
                      }}
                      href="#-works"
                    >
                      <span className="icon ion-paintbrush" />
                      Works
                    </a>
                  </li>
                  <li
                    className={`menu-item ${
                      nav === "blog"
                        ? "current-menu-item current_page_item"
                        : ""
                    } `}
                  >
                    <a
                      onClick={() => {
                        setMenu(false);
                        changeNav("blog");
                      }}
                      href="#-blog"
                    >
                      <span className="icon ion-chatbox-working" />
                      Blog
                    </a>
                  </li>
                  <li
                    className={`menu-item ${
                      nav === "contacts"
                        ? "current-menu-item current_page_item"
                        : ""
                    } `}
                  >
                    <a
                      onClick={() => {
                        setMenu(false);
                        changeNav("contacts");
                      }}
                      href="#-contacts"
                    >
                      <span className="icon ion-at" />
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* menu button */}
          <div className="lnks">
            <a
              href="#"
              className="lnk lnk-view-menu"
              onClick={() => setMenu(!menu)}
            >
              <span className="ion ion-android-more-horizontal" />
              <span className="text" data-text-open="Close">
                {menu ? "Close" : "Menu"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Home4Start;
