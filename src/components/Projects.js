import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import colorSharp2 from "../assets/img/color-sharp2.png"
import "animate.css"
import TrackVisibility from "react-on-screen"

export const Projects = () => {
  return (
    <section className="project" id="AboutUs">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>AboutUs</h2>
                  <p>
                    Domainhostly.com WEB HOSTING IN INDIA Domainhostly.com is
                    one of the leading web hosting and domain registration
                    service provider in India since 2020. Domainhostly.com India
                    offers cheap website hosting solutions and cheap domain
                    registration service from small to enterprise-level business
                    to make their online identity. <br></br>
                    <br></br> All the hosting and website registration plans at
                    Domainhostly.com India are cost-effective, reliable with
                    high-performance servers. Each of the web hosting plans at
                    Domainhostly.com India comes with email, FTP, and
                    sub-domains. We do offer custom hosting plans according to
                    the client's requirements. Domainhostly.com India offers
                    cheap domain registration service along with cheap Linux &
                    Windows hosting services for the startups, and Shared,
                    Reseller, VPS, and Dedicated server hosting plans for large
                    scale business professionals. Choose from our variety of
                    hosting plans to boost your business growth online through
                    your website. <br></br>
                    <br></br>
                    <br></br>
                    Our Support Our technical specialist are here 24x7 and all
                    365 days to assist you with all aspect of your website
                    hosting and domain registration experience. We do assists
                    you via Live Chat, Phone Calls and Emails for any Web
                    Hosting and Domain Registration related queries.
                    <br></br>
                    <br></br>
                    Our Server Uptime 99.9% Uptime is guaranteed with
                    DomainHostly.com India. The online presence of your website
                    is the utmost priority for us.<br></br>
                    <br></br>
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Phone</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Chat</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Location</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          <div className="phoneImage">
                            <a
                              style={{ textDecoration: "none" }}
                              href="tel:+9196985 48633"
                            >
                              <img
                                src="https://c.tenor.com/ju4PztDv8WcAAAAi/firstrequestrecords-first-request.gif"
                                className="PhoneImg"
                              />
                              <h2 className="callnumber">96985 48633</h2>
                            </a>
                          </div>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="MessgaeCenter">
                          <a
                            style={{ textDecoration: "none" }}
                            target="_block"
                            href="https://api.whatsapp.com/send/?phone=+919698548633&text=Hi%21+domain+Hostly&type=phone_number&app_absent=0"
                          >
                            <button class="MessageChat">
                              <img src="https://img1.wsimg.com/liveengage/v2/tag/DarkWA-092020.svg" />
                              <button>Message us on WhatsApp</button>
                            </button>
                          </a>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="GoogleMapIframe">
                          <iframe
                            className="GoogleMap"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.650653537624!2d77.72403941517865!3d11.287070291976242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96febc0000001%3A0xd7530a2a921ed678!2sDomainHostly.com!5e0!3m2!1sen!2sin!4v1658461875163!5m2!1sen!2sin"
                            width="800"
                            height="450"
                            frameborder="20"
                            aria-hidden="false"
                            tabindex="0"
                          ></iframe>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
