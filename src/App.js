import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import All from "./component/All";
import DataScience from "./component/Datascience.jsx";
import Cyber from "./component/Cyber";
import Career from "./component/Carreer.jsx";
import Fullstack from "./component/Fullstack";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid ">
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav"> 
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            className="nav-link text-black"
            aria-current="page"
            to={"/"}
          >
            ALL
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-black"
            aria-current="page"
            to={"/Fullstack"}
          >
            FULL STACK DEVELOPMENT
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-black" to={"/datascience"}>
            DATA SCIENCE
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-black" to={"/cyber"}>
            CYBER SECURITY
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-black" to={"/career"}>
            CAREER
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="/datascience" element={<DataScience />} />
            <Route path="/cyber" element={<Cyber />} />
            <Route path="/career" element={<Career />} />
            <Route path="/Fullstack" element={<Fullstack />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
