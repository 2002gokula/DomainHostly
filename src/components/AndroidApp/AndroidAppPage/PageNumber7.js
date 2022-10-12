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
              src="https://s3.envato.com/files/349549180/Photo/01.PNG"
              width="100%"
              class="main"
              id="MainImg"
              alt=""
            />
            <div class="small-img-group">
              <div class="small-img-col">
                <img
                  src="https://s3.envato.com/files/349549180/Photo/10_purchase.PNG "
                  class="each"
                  alt=""
                />
              </div>
              <div class="small-img-col">
                <img
                  src="https://s3.envato.com/files/349549180/Photo/16.PNG"
                  class="each"
                  alt=""
                />
              </div>
              <div class="small-img-col">
                <img
                  src="https://s3.envato.com/files/349549180/Photo/21Pos.PNG"
                  alt=""
                />
              </div>
              <div class="small-img-col">
                <img
                  src="https://s3.envato.com/files/349549180/Photo/26.PNG"
                  class="each1"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="single-pro-details">
            <h6>Fashion House / Boutique House / Tailors POS Software </h6>
            <h4> Tailors POS Software</h4>
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
            src="https://s3.envato.com/files/349549180/Photo/34.PNG"
            alt=""
          />
          <img
            src="https://s3.envato.com/files/349549180/Photo/48.PNG"
            alt=""
          />
          <img
            src="https://s3.envato.com/files/349549180/Photo/49.PNG"
            alt=""
          />
          <img
            src="https://s3.envato.com/files/349549180/Photo/70.PNG"
            alt=""
          />
          <img
            src="https://s3.envato.com/files/349549180/Photo/72.PNG"
            alt=""
          />
          <img
            src="https://s3.envato.com/files/349549180/Photo/80.PNG"
            alt=""
          />
          <img
            src="https://s3.envato.com/files/349549180/Photo/90.PNG"
            alt=""
          />
          <img
            src="https://s3.envato.com/files/349549180/Photo/91.PNG"
            alt=""
          />
          <img
            src="https://s3.envato.com/files/349549180/Photo/93.PNG"
            alt=""
          />
          <img
            src="https://s3.envato.com/files/349549180/Photo/Capture.PNG"
            alt=""
          />
          <img
            src="https://s3.envato.com/files/349549180/Photo/CaptureLedger.PNG"
            alt=""
          />
          <img
            src="https://s3.envato.com/files/349549180/Photo/CapturePaymentPay.PNG"
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
