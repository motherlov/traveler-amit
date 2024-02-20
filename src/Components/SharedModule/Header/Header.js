import "./Header.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout, profileDetails } from "../../../Redux/features/auth/authSlice";
import { profile_pic } from "../../../Helper/Helper";
import { defaultProfilePic } from "../../../Image/Image";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const fullURL = `${location.pathname}`;
  // console.log(fullURL, "fullURL");

  const token = localStorage.getItem("token");
  const userPic = localStorage.getItem("profile_pic");
  const userEmail = localStorage.getItem("email");
  const status = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.user);

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  const handleProfileImageClick = () => {
    dispatch(profileDetails());
    setIsProfileModalOpen(true);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const isLoginOrRegister = fullURL === "/login" || fullURL === "/register";

  return (
    <>
      {!isLoginOrRegister && (
        <>
          {/* Topbar Start */}

          <div className="container-fluid bg-light pt-3 d-none d-lg-block">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 text-center text-lg-start mb-2 mb-lg-0">
                  <div className="d-inline-flex align-items-center">
                    {token ? (
                      <img
                        src={userPic ? profile_pic(userPic) : defaultProfilePic}
                        alt="user"
                        className="img-fluid mb-3"
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          marginRight: 80,
                          cursor: "pointer",
                        }}
                        onClick={handleProfileImageClick}
                      />
                    ) : null}
                    <p className="d-flex align-items-center justify-content-center">
                      <i className="fa fa-envelope me-2" />
                      {userEmail ? <>{userEmail}</> : <>info@example.com</>}
                    </p>
                    <p className="text-body px-3">|</p>
                    <p className="d-flex align-items-center justify-content-center ">
                      <i className="fa fa-phone-alt me-2" />
                      +91 9876543210
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 text-center text-lg-end">
                  <div className="d-inline-flex align-items-center">
                    <Link className="text-primary px-3" to="">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link className="text-primary px-3" to="">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link className="text-primary px-3" to="">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link className="text-primary px-3" to="">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link className="text-primary px-3" to="">
                      <i className="fab fa-youtube" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Topbar End */}
          {/* Navbar Start */}
          <div className="container-fluid position-relative nav-bar p-0">
            <div
              className="container-lg position-relative p-0 px-lg-3"
              style={{ zIndex: 9 }}
            >
              <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                <Link to="/" className="navbar-brand">
                  <h1 className="m-0 text-primary">
                    <span className="text-dark">TRAVEL</span>BHARAT
                  </h1>
                </Link>
                <button
                  type="button"
                  className="navbar-toggler"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse justify-content-between px-3"
                  id="navbarCollapse"
                >
                  <div className="navbar-nav ml-auto py-0">
                    <Link to="/" className="nav-item nav-link active">
                      Home
                    </Link>
                    <Link to="/about" className="nav-item nav-link">
                      About
                    </Link>
                    <Link to="/services" className="nav-item nav-link">
                      Services
                    </Link>
                    <Link to="/create" className="nav-item nav-link">
                      Create Blog
                    </Link>
                    <Link to="/packages" className="nav-item nav-link">
                      Tour Packages
                    </Link>
                    <div className="nav-item dropdown">
                      <Link
                        to="#"
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Pages
                      </Link>
                      <ul className="dropdown-menu border-0 rounded-0 m-0">
                        <li>
                          <Link to="/blog" className="dropdown-item">
                            Blog Grid
                          </Link>
                        </li>

                        <li>
                          <Link to="/destination" className="dropdown-item">
                            Destination
                          </Link>
                        </li>
                        <li>
                          <Link to="/guide" className="dropdown-item">
                            Travel Guides
                          </Link>
                        </li>
                        <li>
                          <Link to="/testimonial" className="dropdown-item">
                            Testimonial
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <Link to="/contact" className="nav-item nav-link">
                      Contact
                    </Link>
                    {token ? (
                      <button
                        className="nav-item nav-link"
                        onClick={() => {
                          handleLogout();
                        }}
                      >
                        Logout
                      </button>
                    ) : null}
                  </div>
                </div>
              </nav>
            </div>
          </div>
          {/* Navbar End */}
          {isProfileModalOpen && status === "succeeded" && user && (
            <div
              className="modal fade show"
              tabIndex="-1"
              style={{ display: "block" }}
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content profile-card">
                  <div className="modal-body ">
                    <div className="">
                      <div className="image">
                        <img
                          src={
                            userPic ? profile_pic(userPic) : defaultProfilePic
                          }
                          alt="user"
                          className=" profile-img"

                          //
                        />
                      </div>
                      <div className="text-data">
                        <span className="name">
                          {user.first_name} {user.last_name}
                        </span>
                        <span className="job">Front-End Developer</span>
                        <span className="job">{user.email}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={closeProfileModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Header;
