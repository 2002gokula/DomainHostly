import { useState, useEffect } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import logo from "../assets/img/logo.png"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
import { HashLink } from "react-router-hash-link"
import { BrowserRouter as Router } from "react-router-dom"
import styled from "styled-components"

import CloseIcon from "@mui/icons-material/Close"
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [burgerStatus, setBurgerStatus] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#Domain"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Domain
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setBurgerStatus(true)}
            >
              Hosting
            </Nav.Link>
            <BurgerNav show={burgerStatus}>
              <CloseWrapper>
                <CloseIcon
                  className="closeIcon"
                  onClick={() => setBurgerStatus(false)}
                />
              </CloseWrapper>
              <div className="NavBarCenter">
                <div className="Leftside">
                  <div class="LeftSideDetails">
                    <h6>Call us</h6>
                    <h2>Call Our Award Winning Support 24/7</h2>
                    <p>96985 48633</p>
                    <h1>332, Mullamparappu, Tamil Nadu</h1>
                    <div className="GoogleMapIframe">
                      <iframe
                        className="GoogleMap"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.650653537624!2d77.72403941517865!3d11.287070291976242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96febc0000001%3A0xd7530a2a921ed678!2sDomainHostly.com!5e0!3m2!1sen!2sin!4v1658461875163!5m2!1sen!2sin"
                        width="400"
                        height="170"
                        frameborder="20"
                        aria-hidden="false"
                        tabindex="0"
                      ></iframe>
                    </div>
                    <ul class="wrapper">
                      <li class="icon facebook">
                        <span class="tooltip">Facebook</span>
                        <a
                          href="https://www.facebook.com/profile.php?id=100083740575886"
                          target="_block"
                        >
                          <span>
                            <img src="/SvgIcon/fb.svg" />
                          </span>
                        </a>
                      </li>
                      <li class="icon twitter">
                        <span class="tooltip">Twitter</span>
                        <a
                          href="https://twitter.com/DomainHoslty"
                          target="_block"
                        >
                          <span>
                            <img src="/SvgIcon/t.svg" />
                          </span>
                        </a>
                      </li>
                      <li class="icon instagram">
                        <span class="tooltip">Instagram</span>
                        <a
                          href="https://www.instagram.com/domain_hostly/"
                          target="_block"
                        >
                          <span>
                            <img src="/SvgIcon/instrag.svg" />
                          </span>
                        </a>
                      </li>
                      <li class="icon github">
                        <span class="tooltip">Github</span>
                        <a
                          href="https://github.com/DomainHoslty"
                          target="_block"
                        >
                          <span>
                            <img src="/Svgicon/git.svg" />
                          </span>
                        </a>
                      </li>
                      <li class="icon youtube">
                        <span class="tooltip">Youtube</span>
                        <a
                          href="https://www.youtube.com/c/TrainingTrainsAcademy/videos"
                          target="_black"
                        >
                          <span>
                            <img src="/SvgIcon/you.svg" />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="RightSide">
                  <div class="sc-eCYdqJ clUtOI">
                    <h1>Chat Now</h1>
                    <p>
                      Chat with our sales &amp; support team for quick answers
                      on product features, pricing and more.
                    </p>
                    <button
                      style={{ display: "flex" }}
                      class="sc-jSMf Ei hAXHZs"
                    >
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://wa.me/+919698548633?text=Hi!%20domain%20Hostly"
                        target="_black"
                      >
                        <button
                          className="SearchBtn"
                          style={{
                            display: "flex",
                            paddingRight: "120px",
                            height: "56px ",

                            background: "white",
                            color: "black",
                          }}
                        >
                          <div
                            style={{
                              width: "30px",
                              display: "flex",
                              gap: "8px",
                              textAlign: "center",
                            }}
                          >
                            <svg
                              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                              focusable="true"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="SmsOutlinedIcon"
                            >
                              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2z"></path>
                            </svg>
                            <span style={{ marginRight: "-110px" }}>
                              Chat Now
                            </span>
                          </div>
                        </button>
                      </a>
                    </button>
                    <h5>Hours: 24/7</h5>
                    <button class="sc-gKXOVf etLNTJ">
                      <a
                        href="https://wa.me/+919698548633?text=Hi!%20domain%20Hostly"
                        target="_black"
                      >
                        {" "}
                        <img src="https://img1.wsimg.com/liveengage/v2/tag/DarkWA-092020.svg" />
                        <button>Message us on WhatsApp</button>
                      </a>
                    </button>
                    <h6>WhatsApp at +91 96985 48633</h6>
                  </div>
                </div>
              </div>
            </BurgerNav>

            <Nav.Link
              href="#AboutUs"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              About US
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                target="_block"
                href="https://www.linkedin.com/in/boopathi-kumar-b22a5b35/?originalSubdomain=in"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                target="_block"
                href="https://www.facebook.com/people/Domainhostly-Boopathi/100083740575886/"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a
                target="_block"
                href="https://www.instagram.com/domain_hostly/"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <HashLink to="#connect">
              <button className="vvd">
                <span>Contact Us</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

const BurgerNav = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  background: black;
  width: 1429px;
  height: 500px;
  border-radius: 30px;
  z-index: -999;
  list-style: none;
  padding: 10px;
  flex-direction: column;
  text-align: start;
  transform: ${(props) =>
    props.show ? "translateY(18%)" : "translateY(-100%)"};
  transition: transform 0.7s ease-in-out 0s;

  li {
    padding: 15px 0;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */

    a {
      color: black;
      font-weight: 600;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  svg {
    font-size: 30px;
    margin: 20px;
  }
`
