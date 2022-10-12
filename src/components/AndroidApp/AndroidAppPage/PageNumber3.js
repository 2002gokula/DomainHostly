import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Nav } from "react-bootstrap"
import "./PageNumber.css"
const PageNumber3 = () => {
  const [activeLink, setActiveLink] = useState("home")
  return (
    <div className="PageNumber">
      <div className="title">
        <section id="prodetails" class="section-p1">
          <div class="single-pro-image">
            <img
              src="https://s3.envato.com/files/399097847/Preview%20Screenshots/advanced_features.png"
              width="100%"
              class="main"
              id="MainImg"
              alt=""
            />
            <div class="small-img-group">
              <div class="small-img-col">
                <img
                  src="https://s3.envato.com/files/399097847/Preview%20Screenshots/backend_feature.png"
                  class="each"
                  alt=""
                />
              </div>
              <div class="small-img-col">
                <img
                  src="https://s3.envato.com/files/399097847/Preview%20Screenshots/features.png"
                  class="each"
                  alt=""
                />
              </div>
              <div class="small-img-col">
                <img
                  src="https://s3.envato.com/files/399097847/Preview%20Screenshots/multiple_apps.png"
                  class="each1"
                  alt=""
                />
              </div>
              <div class="small-img-col">
                <img
                  src="https://s3.envato.com/files/399097847/Preview%20Screenshots/top_1_multipurpos_app.png"
                  class="each1"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="single-pro-details">
            <h6>
              GroMart | Grocery Store App | Grocery Delivery | Multi -Vendor
              Grocery Flutter App
            </h6>
            <h4> Grocery Store App</h4>
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
                href="https://wa.me/+919698548633?text=Hi!%20domain%20Hostly"
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
        <div class="ProductImage">
          <img
            src="https://camo.envatousercontent.com/18b6959a04b15c2f029b35b13b05ae789872c8a0/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30352f657874656e6465645f726567756c61725f6c6963656e63652d312e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/64bc2c017bd94c7e9d85c1e1ba2acf696ecbdee4/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30352f746f705f315f6d756c7469707572706f735f617070312e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/9c134adb1cff21a253a06614d442fe64e34cee0f/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30352f637573746f6d65725f73637265656e312d322e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/1a6a4f15b204c60f5905246fc5d65691922188ab/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30352f637573746f6d65725f73637265656e73322d312e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/de06d1f4a5008edbbeb15ca05f1f90a4f1217640/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30352f637573746f6d65725f73637265656e73332d312e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/b84c26f34527ebb01d24d9d141bfaefff5d9bea2/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30352f637573746f6d65725f73637265656e73342d312e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/58c5e80c4e3059fbc9e8b1667025076919adaeac/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30352f637573746f6d65725f73637265656e73352d312e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/9427106f7ec9b505e608f0ebb10e715ff5b4dde6/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30352f73746f72655f73637265656e73312d312e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/4a84bdfe98be0f0bae156aace5643a59692ffedd/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30352f73746f72655f73637265656e73322d312e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/01b6c1e876cd054a6ddae998f8ac97775bd067ae/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30352f6472697665725f73637265656e73312d312e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/2fedd864f403d33d7ddfc670bec6c615d33f85ae/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30352f6472697665725f73637265656e73322d312e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/1637fe845a0530964e65f8347cf719d2df2d8562/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30352f637573746f6d65725f6c6f67696e5f616e645f726567697374726174696f6e2e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/9dbc6777ab31919b40973c1a63698674f9379fa0/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30352f776562736974652e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/3d7476f9f0aee41e3f92195d7771a8a37395eef8/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30352f776562736974655f6c616e64696e675f706167652e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/80dd1a1b55461a1740a8c03ffc2bd7086ec75e2e/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30352f6261636b656e645f666561747572652d342e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/f59c875ee76a79693f405c252dea0889c076662b/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30352f7061796d656e74732d312e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/1a95bf7eef233f9ca41a2d731a99a0f93ccd45be/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30352f6c6f6f6b696e675f666f725f737570706f72742d312e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/ffada609bd59dade0a3d5bbc1992decac7794614/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30312f6c6f6f6b696e675f666f725f737570706f72742d6e65772e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/00deb655fc07b09fbb0b4cc92d7097ec8348ba91/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30352f67726f636572795f6170705f617070312e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/ff4040c86561de09e84cb0bc412d41b408bccdcc/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30342f66617368696f6e5f73686f705f617070332e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/b6efb00983ebf10e2edd409a9b7f36ffa84e3963/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30332f636f736d657469635f73686f705f617070322e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/2a7a6ca5fc6bfbcf463375bf438162089ba8bc8e/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30332f6675726e69747572655f73686f705f617070342e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/1a46addab5808f0f610876c9be54b379b8d9f115/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30332f666c6f7765725f73686f705f617070352e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/b211dfa360b8b6056128ca19c58bddc4fdd4cd25/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30332f616c636f686f6c5f73686f705f617070362e706e67"
            alt=""
          />
          <img
            src="https://camo.envatousercontent.com/0020f68b9f7fe878d2a18bbfbee8f94507cb285e/68747470733a2f2f7777772e736964646869696e666f736f66742e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30332f6d65646963696e655f73686f705f617070372e706e67"
            alt=""
          />
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

export default PageNumber3
