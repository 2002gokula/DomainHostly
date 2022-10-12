import "./PageNumber.css"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Nav } from "react-bootstrap"
const PageNumber2 = () => {
  const [activeLink, setActiveLink] = useState("home")
  return (
    <div className="PageNumber">
      <div className="title">
        <section id="prodetails" class="section-p1">
          <div class="single-pro-image">
            <img src="https://www.codester.com/static/uploads/items/000/022/22119/preview.jpg" />
            <div class="small-img-group">
              <div class="small-img-col">
                <img src="https://codecanyon.img.customer.envatousercontent.com/files/387328965/590x300.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=953050bcfd97658de05d0fc783692d2e" />
              </div>
              <div class="small-img-col">
                <img src="https://s3.envato.com/files/320559796/Preview%20Image/00_.__large_preview.png" />
              </div>
              <div class="small-img-col">
                <img src="https://www.codester.com/static/uploads/items/000/022/22119/preview.jpg" />
              </div>
              <div class="small-img-col">
                <img src="https://domainhostly1.web.app/images/FoodApp4.webp" />
              </div>
            </div>
          </div>

          <div class="single-pro-details">
            <h6>
              Flutter taxi booking app UI KIT contains 25+ screens with
              beautiful UI.Also, Help of the google maps to get direction on the
              map
            </h6>
            <h4>taxi booking app</h4>
            <h2>Free Domain And Hosting</h2>
            <div className="CartBox">
              <select>
                <option>Flutter</option>
                <option>Kotlin </option>
                <option>React Native</option>
                <option>Xamarin</option>
                <option>Sencha</option>
              </select>

              <a
                href="https://wa.me/9698548633?text=Hi!%20domain%20Hostly"
                target="_block"
              >
                <button class="normal">Contact Us</button>
              </a>
            </div>

            <h5>
              உங்கள் கடை மற்றும் வியாபாரத்திற்கு Website &amp; Android App
              குறைந்த விலையில் செய்து கொடுக்கப்படும் தனிநபர் மற்றும்
              நிறுவனங்களுக்குத் தேவையான Android And Website Development
            </h5>
            <div>
              <h4>
                Contact Us: <br /> K.Boopathikumar <br /> (Full stack
                developer/data science) <br /> CEO/ Founder Training Trains{" "}
                <br />
                9698548633
              </h4>
              <div class="feature">
                <h1>Customer App Features</h1>
                <li>Products</li>
                <li>Categories</li>
                <li>Multi-restaurant</li>
                <li>Single-restaurant</li>
                <li>Push Notifications</li>
                <li>Dine-In / Book a Table</li>
                <li>Shopping Cart</li>
                <li>Walkthrough Flow Dark Mode Localization &amp; RTL</li>
                <li>Checkout Flow</li>
                <li>Delivery Tracking</li>
                <li>Chat</li>
                <li>Localization &amp; RTL</li>
                <li>Dark Mode</li>
                <li>Geolocation</li>
                <li>Directions API (Google Maps)</li>
                <h2>Backend (Firebase Functions)</h2>
                <li>Dispatcher to Restaurants</li>
                <li>Dispatcher to Drivers</li>
                <li>Order Completion</li>
                <li>Order Tracking </li>
                <li>Push Notifications</li>
                <h3>Restaurant Admin App Features (Dashboard)</h3>
                <li>Accept / Reject Orders</li>
                <li>Push Notifications</li>
                <li>Localization &amp; RTL</li>
                <li>Dark Mode</li>
                <li>Manage Products</li>
                <li>Profile &amp; Setting</li>
                <li>Login &amp; Registration</li>
                <li>Walkthrough Flow</li>
                <h5>Web Admin Panel</h5>
                <li>Users</li>
                <li>Restaurants</li>
                <li>User Profile setting</li>
                <li>Restaurant Filters</li>
                <li>Food Category list</li>
                <li>Food list</li>
                <li>Orders</li>
                <li>Orders review</li>
                <li>Coupons</li>
                <li>Create Coupon</li>
                <li>Driver list</li>
                <li>Payments list</li>
                <li>Restaurant Payouts</li>
                <li>Google map setting</li>
                <li>Social Authentication setting</li>
                <li>Currencies</li>
                <li>Push notification setting</li>
                <li>Payment method setting</li>
                <li>User Profile setting</li>
              </div>
            </div>
          </div>
        </section>
        <div className="ProductImage">
          <img
            src="https://camo.envatousercontent.com/c033c548a08c8029953e3123ee940e73c50b8c59/687474703a2f2f3133392e35392e342e37352f64656d6f696d6167652f66656174757265732d73732e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/c033c548a08c8029953e3123ee940e73c50b8c59/687474703a2f2f3133392e35392e342e37352f64656d6f696d6167652f66656174757265732d73732e706e67"
            alt=""
          />
          {/* <img
            src="https://camo.envatousercontent.com/67d142a374243516c4ebba75cda6c17525b8b638/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30362f7061796d656e74732e706e67"
            alt=""
          ></img>
          <img
            src="https://camo.envatousercontent.com/d1082ecc0941174844cc658fd59d2dd2a7a68847/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30332f637573746f6d65725f73637265656e73312e706e67"
            alt=""
          ></img>
          <img
            src="https://camo.envatousercontent.com/d18dc14de722d784fe7234ffc6a8c4435ad642cf/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30332f637573746f6d65725f73637265656e73322e706e67"
            alt=""
          ></img>
          <img
            src="https://camo.envatousercontent.com/8e2ab4bd3f34e3dfcd19fd61191af702826e150a/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30332f637573746f6d65725f73637265656e73332e706e67"
            alt=""
          ></img>
          <img
            src="https://camo.envatousercontent.com/6b1a885a3854b4518e98db5906e9262c726192ed/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30362f637573746f6d65725f73637265656e73342e706e67"
            alt=""
          ></img>
          <img
            src="https://camo.envatousercontent.com/85e0cae5d7cf3c030c13b6011135ded3301d0dd3/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30362f637573746f6d65725f73637265656e73352e706e67"
            alt=""
          ></img>
          <img
            src="https://camo.envatousercontent.com/07e47d55fcd63c0e882606640e123e92605f0fdd/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30332f72657374617572616e745f73637265656e73312e706e67"
            alt=""
          ></img>
          <img
            src="https://camo.envatousercontent.com/1ddeab29bf084f1ed13d308f13ba31742a7ca937/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30332f72657374617572616e745f73637265656e73322e706e67"
            alt=""
          ></img>
          <img
            src="https://camo.envatousercontent.com/c9b9454d7e5d6e955eae108004e989c927e92b29/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30332f6472697665725f73637265656e73312e706e67"
            alt=""
          ></img>{" "}
          <img
            src="https://camo.envatousercontent.com/890421ab82373d8d3eb82c8f71bdbcf63846d406/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30332f6472697665725f73637265656e73325f6e65772e706e67"
            alt=""
          ></img>
          <img
            src="https://camo.envatousercontent.com/2aaaad651972123d4050544a8f692065574fc6ac/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30362f746865726d616c5f7072696e742e706e67"
            alt=""
          ></img>
          <img
            src="https://camo.envatousercontent.com/9a78549553a913c57d0fe9e7c33ed8b3a044230c/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30332f637573746f6d65725f6c6f67696e5f616e645f726567697374726174696f6e2e706e67"
            alt=""
          ></img>
          <img
            src="https://camo.envatousercontent.com/5b6ddbbac6e1da1db3997181af3811e0d56807d8/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30342f776562736974655f636f646563616e796f6e5f706167655f6e65772d312e706e67"
            alt=""
          ></img>
          <img
            src="https://camo.envatousercontent.com/29591d779dfcd598b4154cf36ad944cc902afc4d/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30332f776562736974655f6c616e64696e675f706167655f636f646563616e796f6e2e706e67"
            alt=""
          ></img>
          <img
            src="https://camo.envatousercontent.com/3224e47950676637df2d507b70c01d61f3a811a1/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30342f6261636b656e645f666561747572652d6e65772e706e67"
            alt=""
          ></img>
          <img
            src="https://camo.envatousercontent.com/ffada609bd59dade0a3d5bbc1992decac7794614/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30312f6c6f6f6b696e675f666f725f737570706f72742d6e65772e706e67"
            alt=""
          ></img>
          <img
            src="https://camo.envatousercontent.com/00deb655fc07b09fbb0b4cc92d7097ec8348ba91/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30352f67726f636572795f6170705f617070312e706e67"
            alt=""
          ></img>
          <img
            src="https://camo.envatousercontent.com/ff4040c86561de09e84cb0bc412d41b408bccdcc/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30342f66617368696f6e5f73686f705f617070332e706e67"
            alt=""
          ></img>
          <img
            src="https://camo.envatousercontent.com/b6efb00983ebf10e2edd409a9b7f36ffa84e3963/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30332f636f736d657469635f73686f705f617070322e706e67"
            alt=""
          ></img>
          <img
            src="https://camo.envatousercontent.com/2a7a6ca5fc6bfbcf463375bf438162089ba8bc8e/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30332f6675726e69747572655f73686f705f617070342e706e67"
            alt=""
          ></img>
          <img
            src="https://camo.envatousercontent.com/1a46addab5808f0f610876c9be54b379b8d9f115/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30332f666c6f7765725f73686f705f617070352e706e67"
            alt=""
          ></img>
          <img
            src="https://camo.envatousercontent.com/b211dfa360b8b6056128ca19c58bddc4fdd4cd25/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30332f616c636f686f6c5f73686f705f617070362e706e67"
            alt=""
          ></img>
          <img
            src="https://camo.envatousercontent.com/0020f68b9f7fe878d2a18bbfbee8f94507cb285e/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30332f6d65646963696e655f73686f705f617070372e706e67"
            alt=""
          ></img> */}
        </div>
        <div class="feature3">
          <h1>Featured App</h1>
        </div>
        <div className="featureCard">
          <div className="featureCardRow">
            <div class="pro" onclick="window.location.href='sproduct.html';">
              <Nav.Link
                href="/androidapps/fooddeliveryapp"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link text"
                }
              >
                <img src="https://s3.envato.com/files/397886303/advanced_features.png" />
                <div class="des">
                  <h5>
                    Foodie | UberEats Clone | Food Delivery App | Multiple
                    Restaurant Food Delivery Flutter App
                  </h5>
                </div>
                <button className="Btnabout">Learn More’s</button>
              </Nav.Link>
            </div>

            <div class="pro" onclick="window.location.href='sproduct.html';">
              <Nav.Link
                href="/androidapps/fluttertaxibookingapp"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link text"
                }
              >
                <img src="https://codecanyon.img.customer.envatousercontent.com/files/332711426/inline_preview_image.png?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=3285e50c81fe9605a2cb167b77c36a3c" />
                <div class="des">
                  <h5>
                    Flutter Taxi Booking App UI KIT || Flutter taxi booking app
                    UI KIT contains 25+ screens with beautiful UI.Also, Help of
                    the google maps to get direction on the map.
                  </h5>
                </div>
                <button className="Btnabout">Learn More’s</button>
              </Nav.Link>
            </div>

            <div class="pro" onclick="window.location.href='sproduct.html';">
              <Nav.Link
                href="/androidapps/grocerystoreapp"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link text"
                }
              >
                <img src="https://domainhostly1.web.app/images/grocery.avif" />
                <div class="des">
                  <h5>
                    Grocery Store App || Grocery App Template Groceries Shopping
                    App designed by Ishan Madushka. Connect with them on
                    Dribbble; the global community for designers and creative
                    professionals.
                  </h5>
                </div>
                <button className="Btnabout">Learn More’s</button>
              </Nav.Link>
            </div>

            <div class="pro" onclick="window.location.href='sproduct.html';">
              <Nav.Link
                href="/androidapps/fluttertaxibookingapp"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link text"
                }
              >
                <img src="https://domainhostly1.web.app/images/hotel.avif" />
                <div class="des">
                  <h5>
                    Flutter Hotel Booking and Hotel Management in Flutter
                    Booking Hotel Apps || Check if the branch is origin/develop.
                  </h5>
                </div>
                <button className="Btnabout">Learn More’s</button>
              </Nav.Link>
            </div>

            <div class="pro" onclick="window.location.href='sproduct.html';">
              <Nav.Link
                href="/androidapps/vehiclemanagementsystem"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link text"
                }
              >
                <img src="https://domainhostly1.web.app/images/vms.avif" />
                <div class="des">
                  <h5>
                    VMS - Vehicle Management System || VMS – Vehicle Management
                    System is the complete Fleet Management System for managing
                    vehicle management.if you want to manage your small or large
                    vehicle business.This VMS is suitable for you.
                  </h5>
                </div>
                <button className="Btnabout">Learn More’s</button>
              </Nav.Link>
            </div>

            <div class="pro" onclick="window.location.href='sproduct.html';">
              <Nav.Link
                href="/androidapps/schoolmanagementsystem"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link text"
                }
              >
                <img src="https://domainhostly1.web.app/images/school.avif" />
                <div class="des">
                  <h5>
                    School Management System Plugin for wordpress is ideal way
                    to manage complete school operation. The system has
                    different access rights for Admin, Teacher, Student and
                    Parent.
                  </h5>
                </div>
                <button className="Btnabout">Learn More’s</button>
              </Nav.Link>
            </div>

            <div class="pro" onclick="window.location.href='sproduct.html';">
              <Nav.Link
                href="/androidapps/tailorsPOSsoftware"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link text"
                }
              >
                <img src="https://domainhostly1.web.app/images/pos.png" />
                <div class="des">
                  <h5>
                    Fashion House / Boutique House / Tailors POS Software ||
                    Stock Ledger Customer and Supplier Ledger
                  </h5>
                </div>
                <button className="Btnabout">Learn More’s</button>
              </Nav.Link>
            </div>

            <div class="pro" onclick="window.location.href='sproduct.html';">
              <Nav.Link
                href="/androidapps/fueldeliveryapp"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link text"
                }
              >
                <img src="https://domainhostly1.web.app/images/petrol.png" />
                <div class="des">
                  <h5>Benefits of Developing On-demand Fuel Delivery App</h5>
                </div>
                <button className="Btnabout">Learn More’s</button>
              </Nav.Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageNumber2
