import React, { useState } from "react";
import styles from "./Navbar.module.css";
import cx from "classnames";
import { Navbar, Nav } from "react-bootstrap";
import history from "../../history";
import { TweenLite } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const NavbarComponent = () => {
  const [active, setActiveState] = useState("home");
  const [isOpen, setOpenState] = useState(false);

  const navigateHomeScreen = () => {
    setActiveState("home");
    history.push({ pathname: "/" });
  };

  const navigateBlogScreen = () => {
    setActiveState("blog");
    history.push({ pathname: "/BlogScreen" });
  };

  const navigatePhotographScreen = () => {
    setActiveState("photo");
    history.push({ pathname: "/PhotographScreen" });
  };

  const navigateAboutScreen = () => {
    setActiveState("about");
    history.push({ pathname: "/AboutScreen" });
  };

  const togglerAnimation = () => {
    if (!isOpen) {
      setOpenState(true);
      TweenLite.staggerFrom(".nav-link", 1.5, { opacity: 0, y: -20 }, 0.3);
    } else {
      setOpenState(false);
      TweenLite.from(".nav-link", 0.5, { opacity: 0 });
    }
  };

  return (
    <Navbar
      fixed="top"
      className={styles.navbar}
      bg="#131111"
      variant="dark"
      expand="sm"
    >
      <Navbar.Brand
        onClick={navigateHomeScreen}
        className={styles.navbarbrand}
        href="#"
      >
        Photography <span className={styles.circle} />
      </Navbar.Brand>
      <Navbar.Toggle
        onClick={togglerAnimation}
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            onClick={navigateHomeScreen}
            className={cx(
              styles.navlink,
              active === "home" ? styles.active : ""
            )}
            href="#"
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={navigateBlogScreen}
            className={cx(
              styles.navlink,
              active === "blog" ? styles.active : ""
            )}
            href="#"
          >
            Blog
          </Nav.Link>
          <Nav.Link
            onClick={navigatePhotographScreen}
            className={cx(
              styles.navlink,
              active === "photo" ? styles.active : ""
            )}
            href="#"
          >
            Photograph
          </Nav.Link>
          <Nav.Link
            onClick={navigateAboutScreen}
            className={cx(
              styles.navlink,
              active === "about" ? styles.active : ""
            )}
            href="#"
          >
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
