import { Link } from "react-router-dom";
import PageHeader from "../PageHeader/PageHeader";

import Booking from "../Booking/Booking";
import { about } from "../../../Image/Image";

const About = () => {
  const pageTitle = "About";
  const breadcrumbLinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
  ];
  return (
    <div>
      <PageHeader pageTitle={pageTitle} breadcrumbLinks={breadcrumbLinks} />
      <Booking />
      <>
        <div className="container-fluid py-5">
          <div className="container pt-5">
            <div className="row">
              <div className="col-lg-6" style={{ minHeight: 500 }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100"
                    src={about}
                    style={{ objectFit: "cover" }}
                    alt="about"
                  />
                </div>
              </div>
              <div className="col-lg-6 pt-5 pb-lg-5">
                <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                  <h6
                    className="text-primary text-uppercase"
                    style={{ letterSpacing: 5 }}
                  >
                    About Us
                  </h6>
                  <h1 className="mb-3">
                    We Provide Best Tour Packages In Your Budget
                  </h1>
                  <p>
                    Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                    dolore sed et. Sit rebum labore sit sit ut vero no sit. Et
                    elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo
                    eos et erat sed diam duo
                  </p>
                  <div className="row mb-4">
                    <div className="col-6">
                      <img className="img-fluid" src="img/about-1.jpg" alt="" />
                    </div>
                    <div className="col-6">
                      <img className="img-fluid" src="img/about-2.jpg" alt="" />
                    </div>
                  </div>
                  <Link href="" className="btn btn-primary mt-1">
                    Book Now
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
export default About;
