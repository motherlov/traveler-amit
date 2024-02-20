import { Link } from "react-router-dom";
import { team1, team2, team3, team4 } from "../../../../Image/Image";
import PageHeader from "../../PageHeader/PageHeader";
import Booking from "../../Booking/Booking";

const Guide = () => {
  const pageTitle = "Guide";
  const breadcrumbLinks = [
    { label: "Home", url: "/" },
    { label: "Guide", url: "/guide" },
  ];
  return (
    <div>
      <PageHeader pageTitle={pageTitle} breadcrumbLinks={breadcrumbLinks} />
      <Booking />
      <>
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-1">
            <div className="text-center mb-3 pb-3">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                Guides
              </h6>
              <h1>Our Travel Guides</h1>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={team1} alt="team1" />
                    <div className="team-social">
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Guide Name</h5>
                    <p className="m-0">Designation</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={team2} alt="team2" />
                    <div className="team-social">
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Guide Name</h5>
                    <p className="m-0">Designation</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={team3} alt="team3" />
                    <div className="team-social">
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Guide Name</h5>
                    <p className="m-0">Designation</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={team4} alt="team4" />
                    <div className="team-social">
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Guide Name</h5>
                    <p className="m-0">Designation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid py-5">
          <div className="container pt-0 pb-3">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={team1} alt="team1" />
                    <div className="team-social">
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Guide Name</h5>
                    <p className="m-0">Designation</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={team2} alt="team2" />
                    <div className="team-social">
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Guide Name</h5>
                    <p className="m-0">Designation</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={team3} alt="team3" />
                    <div className="team-social">
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Guide Name</h5>
                    <p className="m-0">Designation</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={team4} alt="team4" />
                    <div className="team-social">
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        to=""
                      >
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Guide Name</h5>
                    <p className="m-0">Designation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
export default Guide;
