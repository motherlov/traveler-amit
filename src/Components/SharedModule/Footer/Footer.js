import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const fullURL = `${location.pathname}`;
  // console.log(fullURL, "fullURL");

  const isLoginOrRegister = fullURL === "/login" || fullURL === "/register";
  return (
    <>
      {!isLoginOrRegister && (
        <>
          {" "}
          {/* Footer Start */}
          <div
            className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5"
            style={{ marginTop: 90 }}
          >
            <div className="row pt-5">
              <div className="col-lg-3 col-md-6 mb-5">
                <Link to="" className="navbar-brand">
                  <h1 className="text-primary">
                    <span className="text-white">TRAVEL</span>BHARAT
                  </h1>
                </Link>
                <p>
                  Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet
                  labore rebum lorem ipsum dolor. No sed vero lorem dolor dolor
                </p>
                <h6
                  className="text-white text-uppercase mt-4 mb-3"
                  style={{ letterSpacing: 5 }}
                >
                  Follow Us
                </h6>
                <div className="d-flex justify-content-start">
                  <Link
                    className="btn btn-outline-primary btn-square mr-2"
                    to="#"
                  >
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link
                    className="btn btn-outline-primary btn-square mr-2"
                    to="#"
                  >
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link
                    className="btn btn-outline-primary btn-square mr-2"
                    to="#"
                  >
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link className="btn btn-outline-primary btn-square" to="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-5">
                <h5
                  className="text-white text-uppercase mb-4"
                  style={{ letterSpacing: 5 }}
                >
                  Our Services
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-white-50 mb-2" to="/about">
                    <i className="fa fa-angle-right mr-2" />
                    About
                  </Link>
                  <Link className="text-white-50 mb-2" to="/destination">
                    <i className="fa fa-angle-right mr-2" />
                    Destination
                  </Link>
                  <Link className="text-white-50 mb-2" to="/services">
                    <i className="fa fa-angle-right mr-2" />
                    Services
                  </Link>
                  <Link className="text-white-50 mb-2" to="/packages">
                    <i className="fa fa-angle-right mr-2" />
                    Packages
                  </Link>
                  <Link className="text-white-50 mb-2" to="/guide">
                    <i className="fa fa-angle-right mr-2" />
                    Guides
                  </Link>
                  <Link className="text-white-50 mb-2" to="/testimonial">
                    <i className="fa fa-angle-right mr-2" />
                    Testimonial
                  </Link>
                  <Link className="text-white-50" to="/blog">
                    <i className="fa fa-angle-right mr-2" />
                    Blog
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-5">
                <h5
                  className="text-white text-uppercase mb-4"
                  style={{ letterSpacing: 5 }}
                >
                  Usefull Links
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-white-50 mb-2" to="/about">
                    <i className="fa fa-angle-right mr-2" />
                    About
                  </Link>
                  <Link className="text-white-50 mb-2" to="/destination">
                    <i className="fa fa-angle-right mr-2" />
                    Destination
                  </Link>
                  <Link className="text-white-50 mb-2" to="/services">
                    <i className="fa fa-angle-right mr-2" />
                    Services
                  </Link>
                  <Link className="text-white-50 mb-2" to="/packages">
                    <i className="fa fa-angle-right mr-2" />
                    Packages
                  </Link>
                  <Link className="text-white-50 mb-2" to="/guide">
                    <i className="fa fa-angle-right mr-2" />
                    Guides
                  </Link>
                  <Link className="text-white-50 mb-2" to="/testimonial">
                    <i className="fa fa-angle-right mr-2" />
                    Testimonial
                  </Link>
                  <Link className="text-white-50" to="/blog">
                    <i className="fa fa-angle-right mr-2" />
                    Blog
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-5">
                <h5
                  className="text-white text-uppercase mb-4"
                  style={{ letterSpacing: 5 }}
                >
                  Contact Us
                </h5>
                <p>
                  <i className="fa fa-map-marker-alt mr-2" />
                  Kolkata,West Bengal,Bharat
                </p>
                <p>
                  <i className="fa fa-phone-alt mr-2" />
                  +91 9876543210
                </p>
                <p>
                  <i className="fa fa-envelope mr-2" />
                  info@example.com
                </p>
                <h6
                  className="text-white text-uppercase mt-4 mb-3"
                  style={{ letterSpacing: 5 }}
                >
                  Newsletter
                </h6>
                <div className="w-100">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control border-light"
                      style={{ padding: 25 }}
                      placeholder="Your Email"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary px-3">Sign Up</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
            style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
          >
            <div className="row">
              <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                <p className="m-0 text-white-50">
                  Copyright © <Link to="/">Amit Kumar Dey</Link>. All Rights
                  Reserved.
                </p>
              </div>
              <div className="col-lg-6 text-center text-md-right">
                <p className="m-0 text-white-50">
                  Designed by <Link to="https://htmlcodex.com">HTML Codex</Link>
                </p>
              </div>
            </div>
          </div>
          {/* Footer End */}
        </>
      )}
    </>
  );
};
export default Footer;
