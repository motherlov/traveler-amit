import { Link } from "react-router-dom";
import { destination1, destination2, destination3, destination4, destination5, destination6 } from "../../../../Image/Image";
import PageHeader from "../../PageHeader/PageHeader";
import Booking from "../../Booking/Booking";

const Destination = () => {
    const pageTitle = "Destination";
    const breadcrumbLinks = [
      { label: "Home", url: "/" },
      { label: "Destination", url: "/destination" },
    ];
  return (
    <div>
              <PageHeader pageTitle={pageTitle} breadcrumbLinks={breadcrumbLinks} />
      <Booking />
      <>
        {/* Destination Start */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                Destination
              </h6>
              <h1>Explore Top Destination</h1>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid"
                    src={destination1}
                    alt="destination1"
                  />
                  <Link
                    className="destination-overlay text-white text-decoration-none"
                    href=""
                  >
                    <h5 className="text-white">United States</h5>
                    <span>100 Cities</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid"
                    src={destination2}
                    alt="destination2"
                  />
                  <Link
                    className="destination-overlay text-white text-decoration-none"
                    href=""
                  >
                    <h5 className="text-white">United Kingdom</h5>
                    <span>100 Cities</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid"
                    src={destination3}
                    alt="destination3"
                  />
                  <Link
                    className="destination-overlay text-white text-decoration-none"
                    href=""
                  >
                    <h5 className="text-white">Australia</h5>
                    <span>100 Cities</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid"
                    src={destination4}
                    alt="destination4"
                  />
                  <Link
                    className="destination-overlay text-white text-decoration-none"
                    href=""
                  >
                    <h5 className="text-white">India</h5>
                    <span>100 Cities</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid"
                    src={destination5}
                    alt="destination5"
                  />
                  <Link
                    className="destination-overlay text-white text-decoration-none"
                    href=""
                  >
                    <h5 className="text-white">South Africa</h5>
                    <span>100 Cities</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid"
                    src={destination6}
                    alt="destination6"
                  />
                  <Link
                    className="destination-overlay text-white text-decoration-none"
                    href=""
                  >
                    <h5 className="text-white">Indonesia</h5>
                    <span>100 Cities</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
export default Destination;
