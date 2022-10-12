import { Nav } from "react-bootstrap"
import React, { useState } from "react"
import "./AndroidAppSelection.css"
import { Link } from "react-router-dom"

const AndroidAppSelection = () => {
  const [activeLink, setActiveLink] = useState("home")
  return (
    <div className="AndroidAppSelection">
      <div>
        <div class="pro-container">
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
                  Flutter Taxi Booking App UI KIT || Flutter taxi booking app UI
                  KIT contains 25+ screens with beautiful UI.Also, Help of the
                  google maps to get direction on the map.
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
                  App designed by Ishan Madushka. Connect with them on Dribbble;
                  the global community for designers and creative professionals.
                </h5>
              </div>
              <button className="Btnabout">Learn More’s</button>
            </Nav.Link>
          </div>

          <div class="pro" onclick="window.location.href='sproduct.html';">
            <Nav.Link
              href="/androidapps/flutterhotelbookingandhotelmanagementinflutterbookinghotelapps"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link text"
              }
            >
              <img src="https://domainhostly1.web.app/images/hotel.avif" />
              <div class="des">
                <h5>
                  Flutter Hotel Booking and Hotel Management in Flutter Booking
                  Hotel Apps || Check if the branch is origin/develop.
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
                  School Management System Plugin for wordpress is ideal way to
                  manage complete school operation. The system has different
                  access rights for Admin, Teacher, Student and Parent.
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
                  Fashion House / Boutique House / Tailors POS Software || Stock
                  Ledger Customer and Supplier Ledger
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

          <div class="pro" onclick="window.location.href='sproduct.html';">
            <Nav.Link
              href="/androidapps/fluttermobiledirectorylistingbooking"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link text"
              }
            >
              <img src="https://domainhostly1.web.app/images/book.avif" />
              <div class="des">
                <h5>
                  Listar FluxPro - Flutter mobile directory listing &amp;
                  booking - Wordpress Backend
                </h5>
              </div>
              <button className="Btnabout">Learn More’s</button>
            </Nav.Link>
          </div>

          <div class="pro" onclick="window.location.href='sproduct.html';">
            <Nav.Link
              href="/androidapps/annualmaintenancecontractmanagementsystem"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link text"
              }
            >
              <img src="https://domainhostly1.web.app/images/amc.avif" />
              <div class="des">
                <h5>
                  AMC Master – Annual Maintenance Contract Management System
                </h5>
              </div>
              <button className="Btnabout">Learn More’s</button>
            </Nav.Link>
          </div>

          <div class="pro" onclick="window.location.href='sproduct.html';">
            <Nav.Link
              href="/androidapps/instagramclone"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link text"
              }
            >
              <img src="https://domainhostly1.web.app/images/instar.jpg" />
              <div class="des">
                <h5>
                  Instagram clone app flutter android and iOS with Admin Panel
                </h5>
              </div>
              <button className="Btnabout">Learn More’s</button>
            </Nav.Link>
          </div>
          <div class="pro" onclick="window.location.href='sproduct.html';">
            <Nav.Link
              href="/androidapps/quickDateandroid"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link text"
              }
            >
              <img src="https://domainhostly1.web.app/images/dating.avif" />
              <div class="des">
                <h5>
                  QuickDate Android - Mobile Social Dating Platform Application
                </h5>
              </div>
              <button className="Btnabout">Learn More’s</button>
            </Nav.Link>
          </div>

          <div class="pro" onclick="window.location.href='sproduct.html';">
            <Nav.Link
              href="/androidapps/jobclassifiedsapp"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link text"
              }
            >
              <img src="https://domainhostly1.web.app/images/find.avif" />
              <div class="des">
                <h5>
                  2 App Template| Job classifieds App| Job finding App|
                  Recruitment Portal Job App| Jobber
                </h5>
              </div>
              <button className="Btnabout">Learn More’s</button>
            </Nav.Link>
          </div>

          <div class="pro" onclick="window.location.href='sproduct.html';">
            <Nav.Link
              href="/androidapps/multiecommercesystem"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link text"
              }
            >
              <img src="https://domainhostly1.web.app/images/ecart.avif" />
              <div class="des">
                <h5>
                  eCart - Grocery, Food Delivery, Fruits &amp; Vegetable store,
                  Full Android Ecommerce App
                </h5>
              </div>
              <button className="Btnabout">Learn More’s</button>
            </Nav.Link>
          </div>

          <div class="pro" onclick="window.location.href='sproduct.html';">
            <Nav.Link
              href="/androidapps/coursesmarketplacescriptfull"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link text"
              }
            >
              <img src="https://domainhostly1.web.app/images/lms.avif" />
              <div class="des">
                <h5>
                  LMS &amp; Online Courses Marketplace Script Full Solution -
                  Cursus
                </h5>
              </div>
              <button className="Btnabout">Learn More’s</button>
            </Nav.Link>
          </div>

          <div class="pro" onclick="window.location.href='sproduct.html';">
            <Nav.Link
              href="/androidapps/matrimonialwebsiteandandroidapp"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link text"
              }
            >
              <img src="https://domainhostly1.web.app/images/marrage.jpg" />
              <div class="des">
                <h5>
                  Matrimonial | Wedding App | Admin Panel | Matrimonial Website
                  and Android
                </h5>
              </div>
              <button className="Btnabout">Learn More’s</button>
            </Nav.Link>
          </div>

          <div class="pro" onclick="window.location.href='sproduct.html';">
            <Nav.Link
              href="/androidapps/photographyportfoliowebsite"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link text"
              }
            >
              <img src="https://i.pinimg.com/originals/fa/34/8e/fa348eb378e8383cc95a551b680cf60f.jpg" />
              <div class="des">
                <h5>
                  Valise - Photography Portfolio Website with Artists Portal
                </h5>
              </div>
              <button className="Btnabout">Learn More’s</button>
            </Nav.Link>
          </div>

          <div class="pro" onclick="window.location.href='sproduct.html';">
            <Nav.Link
              href="/androidapps/computerhardwaremanagementsystem"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link text"
              }
            >
              <img src="https://s3.envato.com/files/269969023/Screenshoot/0.png" />
              <div class="des">
                <h5>Computer Hardware Management System</h5>
              </div>
              <button className="Btnabout">Learn More’s</button>
            </Nav.Link>
          </div>

          <div class="pro" onclick="window.location.href='sproduct.html';">
            <Nav.Link
              href="/androidapps/livechannellivestreamwebsite&android"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link text"
              }
            >
              <img src="https://codecanyon.img.customer.envatousercontent.com/files/245626796/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=380f9c4c2e4b62401153955a5b1658ea" />
              <div class="des">
                <h5>LiveStream - Live Channel and Live Stream Website</h5>
              </div>
              <button className="Btnabout">Learn More’s</button>
            </Nav.Link>
          </div>

          <div class="pro" onclick="window.location.href='sproduct.html';">
            <Nav.Link
              href="/androidapps/academyebooksellingaddon"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link text"
              }
            >
              <img src="https://codecanyon.img.customer.envatousercontent.com/files/379373204/banner-academy-ebook-addon.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=e632b001cbc9d315e64de516b065a075" />
              <div class="des">
                <h5>Academy LMS Ebook Selling Addon</h5>
              </div>
              <button className="Btnabout">Learn More’s</button>
            </Nav.Link>
          </div>

          <div class="pro" onclick="window.location.href='sproduct.html';">
            <Nav.Link
              href="/androidapps/multipurposewebsiteCMS"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link text"
              }
            >
              <img src="https://codecanyon.img.customer.envatousercontent.com/files/398129791/preview-3.2.png?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=1af868846e15945fcad149826b2374bb" />
              <div class="des">
                <h5>PlusAgency - Multipurpose Website CMS / Business CMS</h5>
              </div>
              <button className="Btnabout">Learn More’s</button>
            </Nav.Link>
          </div>

          <div class="pro" onclick="window.location.href='sproduct.html';">
            <Nav.Link
              href="/androidapps/hotelbookingsystem"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link text"
              }
            >
              <img src="https://codecanyon.img.customer.envatousercontent.com/files/258168918/uplifted%20hbooktest5.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=1ad9397a13f01f1491c6c120353ccbfb" />
              <div class="des">
                <h5>HBook - Hotel booking system - WordPress Plugin</h5>
              </div>
              <button className="Btnabout">Learn More’s</button>
            </Nav.Link>
          </div>

          <div class="pro" onclick="window.location.href='sproduct.html';">
            <Nav.Link
              href="/androidapps/schoolmanagementlaravelsystem"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link text"
              }
            >
              <img src="https://codecanyon.img.customer.envatousercontent.com/files/303863261/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=6626b72f8684bde7481f2330719a084e" />
              <div class="des">
                <h5>
                  Edumy - LMS Online Education Course &amp; School Management
                  Laravel System
                </h5>
              </div>
              <button className="Btnabout">Learn More’s</button>
            </Nav.Link>
          </div>

          <div class="pro">
            <Nav.Link
              href="/androidapps/woocommerceproductbundlebuilder"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link text"
              }
            >
              <img src="https://codecanyon.img.customer.envatousercontent.com/files/303863261/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=6626b72f8684bde7481f2330719a084e" />
              <div class="des">
                <h5>
                  Bopo – WooCommerce Product Bundle Builder – Build Your Own Box
                </h5>
              </div>
              <button className="Btnabout">Learn More’s</button>
            </Nav.Link>
          </div>

          <div class="pro" onclick="window.location.href='sproduct.html';">
            <Nav.Link
              href="/androidapps/personalblogwebsiteCMS"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link text"
              }
            >
              <img src="https://codecanyon.img.customer.envatousercontent.com/files/359044273/Peview.png?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=6184dab718a34b82949d913cd698ed6a" />
              <div class="des">
                <h5>Blogger - Personal Blog Website CMS</h5>
              </div>
              <button className="Btnabout">Learn More’s</button>
            </Nav.Link>
          </div>

          <div class="pro" onclick="window.location.href='sproduct.html';">
            <Nav.Link
              href="/androidApp/BlekokProxyBrowserUnblockSiteswithFacebookBidingAds"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link text"
              }
            >
              <img src="https://codecanyon.img.customer.envatousercontent.com/files/353096075/inline.png?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=7c06c8e8116f5049610e1d0dcddd7a35" />
              <div class="des">
                <h5>
                  Blekok Proxy Browser - Unblock Sites with Facebook Biding Ads
                </h5>
              </div>
              <button className="Btnabout">Learn More’s</button>
            </Nav.Link>
          </div>
          <div class="pro" onclick="window.location.href='sproduct.html';">
            <Nav.Link
              href="/androidApp/TotalDeskHelpdeskLiveChatKnowledgeBaseTicketSystem"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link text"
              }
            >
              <img src="https://codecanyon.img.customer.envatousercontent.com/files/256998198/preview2.png?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=3736964f0f3bbd515eb0b8cd3a18f960" />
              <div class="des">
                <h5>
                  TotalDesk – Helpdesk, Live Chat, Knowledge Base &amp; Ticket
                  System
                </h5>
              </div>
              <button className="Btnabout">Learn More’s</button>
            </Nav.Link>
          </div>

          <div class="pro" onclick="window.location.href='sproduct.html';">
            <Nav.Link
              href="/androidApp/PharmacymanagementSystem"
              className={
                activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link text"
              }
            >
              <img src="https://codecanyon.img.customer.envatousercontent.com/files/244890219/cover.png?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=293f7bfc50674c8b6ddc74897381818a" />
              <div class="des">
                <h5>PharmaX - Pharmacy management System C# ASP.NET MVC</h5>
              </div>
              <button className="Btnabout">Learn More’s</button>
            </Nav.Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AndroidAppSelection
