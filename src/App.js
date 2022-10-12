import logo from "./logo.svg"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { NavBar } from "./components/NavBar"
import { Banner } from "./components/Banner"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import Development from "./components/Development"
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import Chat from "./Chat"
import { BrowserRouter } from "react-router-dom"
import AndroidAppSelection from "./components/AndroidApp/AndroidAppSelection"
import PageNumber1 from "./components/AndroidApp/AndroidAppPage/PageNumber1"
import PageNumber2 from "./components/AndroidApp/AndroidAppPage/PageNumber2"
import PageNumber3 from "./components/AndroidApp/AndroidAppPage/PageNumber3"
import PageNumber4 from "./components/AndroidApp/AndroidAppPage/PageNumber4"
import PageNumber5 from "./components/AndroidApp/AndroidAppPage/PageNumber5"
import PageNumber6 from "./components/AndroidApp/AndroidAppPage/PageNumber6"
import PageNumber7 from "./components/AndroidApp/AndroidAppPage/PageNumber7"
import PageNumber8 from "./components/AndroidApp/AndroidAppPage/PageNumber8"
import PageNumber9 from "./components/AndroidApp/AndroidAppPage/PageNumber9"
import PageNumber10 from "./components/AndroidApp/AndroidAppPage/pageNumber10"
import PageNumber11 from "./components/AndroidApp/AndroidAppPage/PageNumber11"
import PageNumber12 from "./components/AndroidApp/AndroidAppPage/PageNumber12"
import PageNumber13 from "./components/AndroidApp/AndroidAppPage/PageNumber13"
import PageNumber14 from "./components/AndroidApp/AndroidAppPage/PageNumber14"
import PageNumber15 from "./components/AndroidApp/AndroidAppPage/PageNumber15"
import PageNumber16 from "./components/AndroidApp/AndroidAppPage/PageNumber16"
import PageNumber17 from "./components/AndroidApp/AndroidAppPage/PageNumber17"
import PageNumber18 from "./components/AndroidApp/AndroidAppPage/PageNumber18"
import PageNumber19 from "./components/AndroidApp/AndroidAppPage/PageNumber19"
import PageNumber20 from "./components/AndroidApp/AndroidAppPage/PageNumber20"
import PageNumber21 from "./components/AndroidApp/AndroidAppPage/PageNumber21"
import PageNumber22 from "./components/AndroidApp/AndroidAppPage/PageNumber22"
import PageNumber23 from "./components/AndroidApp/AndroidAppPage/PageNumber23"
import PageNumber24 from "./components/AndroidApp/AndroidAppPage/PageNumber24"
import PageNumber25 from "./components/AndroidApp/AndroidAppPage/PageNumber25"
import PageNumber26 from "./components/AndroidApp/AndroidAppPage/PageNumber26"
import PageNumber27 from "./components/AndroidApp/AndroidAppPage/PageNumber27"
import PageNumber28 from "./components/AndroidApp/AndroidAppPage/PageNumber28"
function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Banner />
              <Skills />
              <Development />
            </>
          }
        />
        <Route path="/androidapps" element={<AndroidAppSelection />} />
        <Route path="/androidapps/fooddeliveryapp" element={<PageNumber1 />} />
        <Route
          path="/androidapps/fluttertaxibookingapp"
          element={<PageNumber2 />}
        />
        <Route path="/androidapps/grocerystoreapp" element={<PageNumber3 />} />
        <Route
          path="/androidapps/flutterhotelbookingandhotelmanagementinflutterbookinghotelapps"
          element={<PageNumber4 />}
        />
        <Route
          path="/androidapps/vehiclemanagementsystem"
          element={<PageNumber5 />}
        />
        <Route
          path="/androidapps/schoolmanagementsystem"
          element={<PageNumber6 />}
        />
        <Route
          path="/androidapps/tailorsPOSsoftware"
          element={<PageNumber7 />}
        />
        <Route path="/androidapps/fueldeliveryapp" element={<PageNumber8 />} />
        <Route
          path="/androidapps/fluttermobiledirectorylistingbooking"
          element={<PageNumber9 />}
        />
        <Route
          path="/androidapps/annualmaintenancecontractmanagementsystem"
          element={<PageNumber10 />}
        />
        <Route path="/androidapps/instagramclone" element={<PageNumber11 />} />
        <Route
          path="/androidapps/quickDateandroid"
          element={<PageNumber12 />}
        />
        <Route
          path="/androidapps/jobclassifiedsapp"
          element={<PageNumber13 />}
        />
        <Route
          path="/androidapps/multiecommercesystem"
          element={<PageNumber14 />}
        />
        <Route
          path="/androidapps/coursesmarketplacescriptfull"
          element={<PageNumber15 />}
        />
        <Route
          path="/androidapps/matrimonialwebsiteandandroidapp"
          element={<PageNumber16 />}
        />
        <Route
          path="/androidapps/photographyportfoliowebsite"
          element={<PageNumber17 />}
        />
        <Route
          path="/androidapps/computerhardwaremanagementsystem"
          element={<PageNumber18 />}
        />
        <Route
          path="/androidapps/livechannellivestreamwebsite&android"
          element={<PageNumber19 />}
        />
        <Route
          path="/androidapps/academyebooksellingaddon"
          element={<PageNumber20 />}
        />
        <Route
          path="/androidapps/multipurposewebsiteCMS"
          element={<PageNumber21 />}
        />
        <Route
          path="/androidapps/hotelbookingsystem"
          element={<PageNumber22 />}
        />
        <Route
          path="/androidapps/schoolmanagementlaravelsystem"
          element={<PageNumber23 />}
        />
        <Route
          path="/androidapps/woocommerceproductbundlebuilder"
          element={<PageNumber24 />}
        />
        <Route
          path="/androidapps/personalblogwebsiteCMS"
          element={<PageNumber25 />}
        />
        <Route
          path="/androidApp/BlekokProxyBrowserUnblockSiteswithFacebookBidingAds"
          element={<PageNumber26 />}
        />
        <Route
          path="/androidApp/TotalDeskHelpdeskLiveChatKnowledgeBaseTicketSystem"
          element={<PageNumber27 />}
        />
        <Route
          path="/androidApp/PharmacymanagementSystem"
          element={<PageNumber28 />}
        />
        <Route path="/androidApp" element={<AndroidAppSelection />} />
      </Routes>
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
