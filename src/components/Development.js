import { Nav } from "react-bootstrap"
import React, { useState } from "react"
import "./Development.css"
import { Link } from "react-router-dom"
const Development = () => {
  const [activeLink, setActiveLink] = useState("home")
  return (
    <div className="Development">
      <div className="DevelopmentTitle">
        <article>
          <h1>Website And Android Development</h1>
        </article>
        <br></br>
        <br></br>
      </div>
      <div class="subtitle">
        <h5 style={{ fontSize: "22px" }} class="h2">
          உங்கள் கடை மற்றும் வியாபாரத்திற்கு Website &amp; Android App குறைந்த
          விலையில் செய்து கொடுக்கப்படும் தனிநபர் மற்றும் நிறுவனங்களுக்குத்
          தேவையான
        </h5>
      </div>
      <div class="optiontitle">
        <h3>
          1. Website Development <br /> 2. Online Shopping <br /> 3. Web
          Application Design <br /> 4. Android apps <br /> 5. Software
          Development <br /> 6.Website Design
        </h3>
      </div>
      <div class="subtitle1">
        <h4 style={{ overflow: "hidden" }}>
          Domainhostly 24/7 Support And Dedicated Development Center. Software
          Development. Software Consultancy. Domainhostly 24 * 7 Help & Support.
          Testing & Support. Services: Software Development, Application
          Development, Mobile App Development, Testing &
          Support|Domain|Hosting|Shared Server||Vbs Server <br />
          <br />
          <br />
          Build your E-Commerce website and Mobile App. Responsive Design,
          Payment Gateway Setup. Mobile Friendly, SEO Ready, Affordable Prices.{" "}
          <br />
          <br />
          <br />
          <br />
          Android &amp; iOS Mobile App Design &amp; Development | Full Custom
          Design with Unlimited Revision. Mobile App Design &amp; Development
        </h4>
      </div>
      <div class="subtitle2">
        <h4>
          சிறு தொழில் வியாபார நண்பர்களுக்கு ஒர் அரிய வாய்ப்பு... ⚡நீங்கள்
          தயாரிக்கும் பொருட்களை மக்களிடம் கொண்டு சென்று உங்கள் பொருளை Brandஐ
          மாற்றிட இதோ உங்களுக்காக ஒர் அரிய வாய்ப்பு...
        </h4>
      </div>
      <div class="subtitle3">
        <h4>
          🎯 Free Domain <br /> 🎯 Web Hosting <br /> 🎯 Easy Updates <br /> 🎯
          Easy Maintenance <br /> 🎯 SMS Intergration <br /> 🎯 Payment
          Intergration <br /> 💫 Online Shopping Website with SMS API & Payment
          Gateway Integration Payment
        </h4>
      </div>
      <div class="subtitle4">
        <h4>
          உங்கள் வாடிக்கையாளர்களை இனி இழக்க தேவை இல்லை. இன்றே முந்துங்கள்
          குறுகிய கால OFFERS.... மேலும் விவரங்களுக்கு எங்களை தொடர்பு கொள்ளவும்
          வேண்டிய நம்பர்
        </h4>
      </div>

      <div className="phoneImage">
        <a style={{ textDecoration: "none" }} href="tel:+9196985 48633">
          <img
            style={{ alignItems: "center", marginRight: "20px" }}
            src="https://c.tenor.com/ju4PztDv8WcAAAAi/firstrequestrecords-first-request.gif"
            className="PhoneImg"
          />
          <h2
            style={{ textAlign: "center", marginBottom: "200px" }}
            className="callnumber"
          >
            96985 48633
          </h2>
        </a>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div class="container1">
          <div class="card">
            <div class="imgBx">
              <img src="https://play-lh.googleusercontent.com/6tWNCg71oCbmNbRIncD3nnxcaw5g99yBAOdeaeqZEdtvOiuf9kbzaBSDWT0KHQ8mS5Q=w480-h960-rw" />
            </div>
            <div class="contentBx">
              <h2>Makkal Mart</h2>
              <div class="size">
                <p style={{ marginTop: "10px" }}>
                  groceries delivered in 5+ Municipal town and Town Panchayat
                  across TamilNadu.
                </p>
              </div>

              <a
                target="_block"
                href="https://play.google.com/store/apps/details?id=com.makkalmart.users"
              >
                Learn More.
              </a>
            </div>
          </div>
        </div>

        <div class="container1">
          <div class="card">
            <div class="imgBx">
              <img src="/pos.png" />
            </div>
            <div class="contentBx">
              <h2>POS offline</h2>
              <div class="size">
                <p style={{ marginTop: "10px" }}>
                  POS is a very useful offline point of sale application for
                  android mobile device
                </p>
              </div>

              <a
                target="_block"
                href="https://play.google.com/store/apps/details?id=com.trainingtrains.smartpos"
              >
                Learn More.
              </a>
            </div>
          </div>
        </div>

        <div class="container1">
          <div class="card">
            <div class="imgBx">
              <img
                style={{ borderRadius: "50%" }}
                src="https://play-lh.googleusercontent.com/sXB0x-vf6BEyMcBrrgYPns7Zy-dI-ukuzSioXYns0WMaWqNyG-Ww3j-FQepEy5MlE0I=s188-rw"
              />
            </div>
            <div class="contentBx">
              <h2>Training Trains Software Inc</h2>
              <div class="size">
                <p style={{ marginTop: "10px" }}>
                  POS is a very useful offline point of sale application for
                  android mobile device
                </p>
              </div>

              <a
                target="_block"
                href="https://play.google.com/store/apps/dev?id=6573373798342823184"
              >
                Learn More.
              </a>
            </div>
          </div>
        </div>

        <div class="container1">
          <div class="card">
            <div class="imgBx">
              <img
                style={{ borderRadius: "50%" }}
                src="https://play-lh.googleusercontent.com/OauqVvd56v3goCFK1rXRQdrAc5AlydaoE7FCpmoHn03r9VqEp0xAe04IMmhQbNB9rBHd=w480-h960-rw"
              />
            </div>
            <div class="contentBx">
              <h2>Word Search</h2>
              <div class="size">
                <p style={{ marginTop: "10px" }}>
                  groceries delivered in 5+ Municipal town and Town Panchayat
                  across TamilNadu.
                </p>
              </div>

              <a
                target="_block"
                href="https://play.google.com/store/apps/details?id=com.trainingtrains.wordsearch"
              >
                Learn More.
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="btngraying">
        <Nav.Link
          href="/androidApp"
          className={
            activeLink === "projects"
              ? "active navbar-link"
              : "navbar-link text"
          }
        >
          <button style={{ fontWeight: "500" }} class="button-52" role="button">
            Learn More’s
          </button>
        </Nav.Link>
      </div>
      <section id="banner" class="section-m1">
        <h4>Website And Android Development</h4>
        <h2>
          Up to <span>40% Off</span> - All Website & Android
        </h2>
        <a href="/androidapps">
          <button class="normal">Explore More</button>
        </a>
      </section>
    </div>
  )
}

export default Development
