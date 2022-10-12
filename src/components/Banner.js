import { useState, useEffect } from "react"
import { Container, Row, Col, Nav } from "react-bootstrap"
import headerImg from "../assets/img/header-img.svg"
import { ArrowRightCircle, Wordpress } from "react-bootstrap-icons"
import "animate.css"
import TrackVisibility from "react-on-screen"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState("")
  const [delta, setDelta] = useState(200 - Math.random() * 100)
  const [index, setIndex] = useState(1)
  const toRotate = ["Web Hosting", "Domain", "Website And Android Application "]
  const period = 200

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setIndex((prevIndex) => prevIndex - 1)
      setDelta(period)
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setIndex(1)
      setDelta(200)
    } else {
      setIndex((prevIndex) => prevIndex + 1)
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome To DomainHostly</span>
                  <h1>
                    {`High Performance Secured`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="10"
                      data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    DomainHostly is the cheapest web hosting company in India
                    that provides you hosting services with various plans & find
                    24/7 support, 30-day guarantee & 99'9% uptime by us
                  </p>
                  <Nav.Link href="/androidApp">
                    <button onClick={() => console.log("connect")}>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </Nav.Link>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <a
                    target="_block"
                    href="https://api.whatsapp.com/send/?phone=9698548633&text=Hi%21+domain+Hostly&type=phone_number&app_absent=0"
                  >
                    <img src={headerImg} alt="Header Img" />
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
