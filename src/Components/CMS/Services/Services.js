import {
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
} from "../../../Image/Image";

import Booking from "../Booking/Booking";
import PageHeader from "../PageHeader/PageHeader";

const Services = () => {
  const pageTitle = "Services";
  const breadcrumbLinks = [
    { label: "Home", url: "/" },
    { label: "Services", url: "/services" },
  ];
  return (
    <div>
      <PageHeader pageTitle={pageTitle} breadcrumbLinks={breadcrumbLinks} />
      <Booking />
      <>
        {/* Service Start */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                Services
              </h6>
              <h1>Tours &amp; Travel Services</h1>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                  <i className="fa fa-2x fa-route mx-auto mb-4" />
                  <h5 className="mb-2">Travel Guide</h5>
                  <p className="m-0">
                    Justo sit justo eos amet tempor amet clita amet ipsum eos
                    elitr. Amet lorem est amet labore
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                  <i className="fa fa-2x fa-ticket-alt mx-auto mb-4" />
                  <h5 className="mb-2">Ticket Booking</h5>
                  <p className="m-0">
                    Justo sit justo eos amet tempor amet clita amet ipsum eos
                    elitr. Amet lorem est amet labore
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                  <i className="fa fa-2x fa-hotel mx-auto mb-4" />
                  <h5 className="mb-2">Hotel Booking</h5>
                  <p className="m-0">
                    Justo sit justo eos amet tempor amet clita amet ipsum eos
                    elitr. Amet lorem est amet labore
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                  <i className="fa fa-2x fa-route mx-auto mb-4" />
                  <h5 className="mb-2">Travel Guide</h5>
                  <p className="m-0">
                    Justo sit justo eos amet tempor amet clita amet ipsum eos
                    elitr. Amet lorem est amet labore
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                  <i className="fa fa-2x fa-ticket-alt mx-auto mb-4" />
                  <h5 className="mb-2">Ticket Booking</h5>
                  <p className="m-0">
                    Justo sit justo eos amet tempor amet clita amet ipsum eos
                    elitr. Amet lorem est amet labore
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                  <i className="fa fa-2x fa-hotel mx-auto mb-4" />
                  <h5 className="mb-2">Hotel Booking</h5>
                  <p className="m-0">
                    Justo sit justo eos amet tempor amet clita amet ipsum eos
                    elitr. Amet lorem est amet labore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
        {/* Testimonial Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="text-center mb-3 pb-3">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                Testimonial
              </h6>
              <h1>What Say Our Clients</h1>
            </div>
            <div className="owl-carousel testimonial-carousel">
              <div className="text-center pb-4">
                <img
                  src={testimonial1}
                  alt="testimonial1"
                  style={{ width: 100, height: 100 }}
                />
                <div className="testimonial-text bg-white p-4 mt-n5">
                  <p className="mt-5">
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <h5 className="text-truncate">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
              <div className="text-center">
                <img
                  src={testimonial2}
                  alt="testimonial2"
                  style={{ width: 100, height: 100 }}
                />
                <div className="testimonial-text bg-white p-4 mt-n5">
                  <p className="mt-5">
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <h5 className="text-truncate">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
              <div className="text-center">
                <img
                  src={testimonial3}
                  alt="testimonial3"
                  style={{ width: 100, height: 100 }}
                />
                <div className="testimonial-text bg-white p-4 mt-n5">
                  <p className="mt-5">
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <h5 className="text-truncate">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
              <div className="text-center">
                <img
                  src={testimonial4}
                  alt="testimonial4"
                  style={{ width: 100, height: 100 }}
                />
                <div className="testimonial-text bg-white p-4 mt-n5">
                  <p className="mt-5">
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <h5 className="text-truncate">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
      </>
    </div>
  );
};
export default Services;
