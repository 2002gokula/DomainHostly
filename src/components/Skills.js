import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import arrow1 from "../assets/img/arrow1.svg"
import arrow2 from "../assets/img/arrow2.svg"
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section className="skill" id="Domain">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Grab the world's most popular domain.</h2>
              <div className="centerinput">
                <div className="DomainInput">
                  <input
                    type="text"
                    class="DomainNameInput"
                    placeholder="Search Your Domain "
                  />
                  <select name="domain" class="DomainSection">
                    <option>.com</option> <option>.in</option>{" "}
                    <option>.net</option> <option>.org</option>{" "}
                    <option>.co.in</option> <option>.us</option>{" "}
                    <option>.online</option> <option>.co</option>{" "}
                    <option>.in.net</option> <option>.biz</option>{" "}
                    <option>.top</option> <option>.xyz</option>{" "}
                    <option>.wiki</option>{" "}
                  </select>
                  <a
                    href="https://wa.me/+919698548633?text=Hi!%20domain%20Hostly"
                    target="_black"
                  >
                    <button class="SearchBtn">Search</button>
                  </a>
                  <div class="DomainName">
                    <h2>.com</h2>
                    <h2>.in</h2>
                    <h2>.org</h2>
                    <h2>.net</h2>
                    <h2>.live</h2>
                    <h2>.online</h2>
                    <h2>.co</h2>
                  </div>
                </div>
              </div>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img
                    src="https://images.pexels.com/photos/7350906/pexels-photo-7350906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Image"
                  />
                  <h5>Domain</h5>
                  <h5>16746</h5>
                </div>
                <div className="item">
                  <img
                    src="https://images.pexels.com/photos/2881233/pexels-photo-2881233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Image"
                  />
                  <h5>Hosting</h5>
                  <h5>26753</h5>
                </div>
                <div className="item">
                  <img
                    src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Image"
                  />
                  <h5>Number of Clients</h5>
                  <h5>56344 </h5>
                </div>
                <div className="item">
                  <img
                    src="https://miro.medium.com/max/900/1*uC7iO6jKhsJl7zVJ54c_ag.png"
                    alt="Image"
                  />
                  <h5>SSL</h5>
                  <h5>12096</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
