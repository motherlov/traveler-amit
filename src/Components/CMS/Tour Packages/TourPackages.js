import { Link } from "react-router-dom";
import {
  package1,
  package2,
  package3,
  package4,
  package5,
  package6,
} from "../../../Image/Image";
import PageHeader from "../PageHeader/PageHeader";
import Booking from "../Booking/Booking";

const TourPackages = () => {
    const pageTitle = "Packages";
    const breadcrumbLinks = [
      { label: "Home", url: "/" },
      { label: "Packages", url: "/packages" },
    ];
  return (
    <div>
      <PageHeader pageTitle={pageTitle} breadcrumbLinks={breadcrumbLinks} />
      <Booking />
      <>
        {/* Packages Start */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                Packages
              </h6>
              <h1>Perfect Tour Packages</h1>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                  <img className="img-fluid" src={package1} alt="package1" />
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0">
                        <i className="fa fa-map-marker-alt text-primary mr-2" />
                        Srinagar
                      </small>
                      <small className="m-0">
                        <i className="fa fa-calendar-alt text-primary mr-2" />
                        3-5 days
                      </small>
                      <small className="m-0">
                        <i className="fa fa-user text-primary mr-2" />2 Person
                      </small>
                    </div>
                    <Link className="h5 text-decoration-none" href="">
                      {`Famously known as 'Heaven on Earth', Srinagar is every bit the epitome of paradise on earth.`.substring(
                        0,
                        90
                      )}
                      ...
                    </Link>

                    <div className="border-top mt-4 pt-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0">
                          <i className="fa fa-star text-primary mr-2" />
                          4.5 <small>(250)</small>
                        </h6>
                        <h5 className="m-0">₹ 11,000 onwards</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                  <img className="img-fluid" src={package2} alt="package2" />
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0">
                        <i className="fa fa-map-marker-alt text-primary mr-2" />
                        Darjeeling, West Bengal
                      </small>
                      <small className="m-0">
                        <i className="fa fa-calendar-alt text-primary mr-2" />
                        2-3 days
                      </small>
                      <small className="m-0">
                        <i className="fa fa-user text-primary mr-2" />2 Person
                      </small>
                    </div>
                    <Link className="h5 text-decoration-none" href="">
                      {` "Queen of The Himalayas" Darjeeling, the former summer
                      capital of India under the British Raj, has evolved into
                      one of India's most sought-after hill stations`.substring(
                        0,
                        90
                      )}
                      ...
                    </Link>
                    <div className="border-top mt-4 pt-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0">
                          <i className="fa fa-star text-primary mr-2" />
                          4.5 <small>(250)</small>
                        </h6>
                        <h5 className="m-0">₹ 6,550 onwards </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                  <img className="img-fluid" src={package3} alt="package3" />
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0">
                        <i className="fa fa-map-marker-alt text-primary mr-2" />
                        Manali, Himachal Pradesh
                      </small>
                      <small className="m-0">
                        <i className="fa fa-calendar-alt text-primary mr-2" />
                        3-4 days
                      </small>
                      <small className="m-0">
                        <i className="fa fa-user text-primary mr-2" />2 Person
                      </small>
                    </div>
                    <Link className="h5 text-decoration-none" href="">
                      {` "Lover's Paradise - India's Honeymoon capital`.substring(
                        0,
                        90
                      )}
                      ...
                    </Link>
                    <div className="border-top mt-4 pt-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0">
                          <i className="fa fa-star text-primary mr-2" />
                          4.5 <small>(250)</small>
                        </h6>
                        <h5 className="m-0">₹ 10,999 onwards</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                  <img className="img-fluid" src={package4} alt="package4" />
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0">
                        <i className="fa fa-map-marker-alt text-primary mr-2" />
                        Varanasi, Uttar Pradesh
                      </small>
                      <small className="m-0">
                        <i className="fa fa-calendar-alt text-primary mr-2" />
                        2-3 days
                      </small>
                      <small className="m-0">
                        <i className="fa fa-user text-primary mr-2" />2 Person
                      </small>
                    </div>
                    <Link className="h5 text-decoration-none" href="">
                      {`    World's oldest living city, Varanasi - also known as Kashi
                       and Benaras, is the spiritual capital of
                      India.`.substring(0, 100)}
                      ...
                    </Link>
                    <div className="border-top mt-4 pt-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0">
                          <i className="fa fa-star text-primary mr-2" />
                          4.5 <small>(250)</small>
                        </h6>
                        <h5 className="m-0">₹ 5,877 onwards</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                  <img className="img-fluid" src={package5} alt="package5" />
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0">
                        <i className="fa fa-map-marker-alt text-primary mr-2" />
                        Goa - Beaches
                      </small>
                      <small className="m-0">
                        <i className="fa fa-calendar-alt text-primary mr-2" />3
                        days
                      </small>
                      <small className="m-0">
                        <i className="fa fa-user text-primary mr-2" />2 Person
                      </small>
                    </div>
                    <Link className="h5 text-decoration-none" href="">
                      {` "Beaches, Sunsets and Crazy Nights".`.substring(0, 90)}
                      ...
                    </Link>
                    <div className="border-top mt-4 pt-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0">
                          <i className="fa fa-star text-primary mr-2" />
                          4.5 <small>(250)</small>
                        </h6>
                        <h5 className="m-0">₹ 5,154 onwards </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                  <img className="img-fluid" src={package6} alt="package6" />
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0">
                        <i className="fa fa-map-marker-alt text-primary mr-2" />
                        Agra,Uttar Pradesh
                      </small>
                      <small className="m-0">
                        <i className="fa fa-calendar-alt text-primary mr-2" />3
                        days
                      </small>
                      <small className="m-0">
                        <i className="fa fa-user text-primary mr-2" />2 Person
                      </small>
                    </div>
                    <Link className="h5 text-decoration-none" href="">
                      {`   "The city of Taj Mahal, the monument of eternal love"`.substring(
                        0,
                        90
                      )}
                      ...
                    </Link>
                    <div className="border-top mt-4 pt-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0">
                          <i className="fa fa-star text-primary mr-2" />
                          4.5 <small>(250)</small>
                        </h6>
                        <h5 className="m-0">₹ 6,500 onwards </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Packages End */}
      </>
    </div>
  );
};
export default TourPackages;
