import { Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react"
import { MailchimpForm } from "./MailchimpForm"
import logo from "../assets/img/logo.png"

import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
import { Nav } from "react-bootstrap"
export const Footer = () => {
  const [activeLink, setActiveLink] = useState("home")
  const [scrolled, setScrolled] = useState(false)

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
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              <img src={logo} />
            </Nav.Link>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                target="_block"
                href="https://www.linkedin.com/feed/?trk=seo-authwall-base_google-one-tap-submit"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a
                target="_block"
                href="https://www.facebook.com/people/Domainhostly-Boopathi/100083740575886/"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
              <a
                target="_block"
                href="https://www.instagram.com/domain_hostly/"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>

            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
