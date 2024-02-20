import { Link, useNavigate } from "react-router-dom";
import {
  about,
  about1,
  about2,
  blog1,
  blog2,
  blog3,
  destination1,
  destination2,
  destination3,
  destination4,
  destination5,
  destination6,
  kedarnath2,
  package1,
  package2,
  package3,
  package4,
  package5,
  package6,
  somnathTemplevideo,
  team1,
  team2,
  team3,
  team4,
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
} from "../../Image/Image";
import { logout } from "../../Redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import Booking from "../CMS/Booking/Booking";


const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <>
        {/* Header Start */}

        {/* Header End */}
        {/* Carousel Start */}
        <div className="container-fluid p-0">
          <div
            id="header-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <video
                  className="w-100"
                  src={somnathTemplevideo}
                  autoPlay
                  muted
                  loop
                />

                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: 900 }}>
                    <h4 className="text-white text-uppercase mb-md-3">
                      Tours &amp; Travel
                    </h4>
                    <h1 className="display-3 text-white mb-md-4">
                      Let's Discover The BHARAT Together
                    </h1>
                    {token ? (
                      <button
                        className="btn btn-primary py-md-3 px-md-5 mt-2"
                        onClick={() => {
                          handleLogout();
                        }}
                      >
                        LOGOUT
                      </button>
                    ) : (
                      <Link
                        to="/login"
                        className="btn btn-primary py-md-3 px-md-5 mt-2"
                      >
                        LOGIN
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="w-100" src={kedarnath2} alt="carousel1" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center p-0">
                  <div className="p-3" style={{ maxWidth: 900 }}>
                    <h4 className="text-white text-uppercase mb-md-3">
                      Tours &amp; Travel
                    </h4>
                    <h1 className="display-3 text-white mb-md-4">
                      Discover Amazing Places in BHARAT With Us
                    </h1>
                    {token ? (
                      <button
                        className="btn btn-primary py-md-3 px-md-5 mt-2"
                        onClick={() => {
                          handleLogout();
                        }}
                      >
                        LOGOUT
                      </button>
                    ) : (
                      <Link
                        to="/login"
                        className="btn btn-primary py-md-3 px-md-5 mt-2"
                      >
                        LOGIN
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="prev"
            >
              <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                <span className="carousel-control-prev-icon mb-n2" />
              </div>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="next"
            >
              <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                <span className="carousel-control-next-icon mb-n2" />
              </div>
            </button>
          </div>
        </div>
        {/* Carousel End */}
        {/* Booking Start */}
        <Booking />
        {/* Booking End */}
        {/* About Start */}
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
                      <img className="img-fluid" src={about1} alt="about1" />
                    </div>
                    <div className="col-6">
                      <img className="img-fluid" src={about2} alt="about2" />
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
        {/* About End */}
        {/* Feature Start */}
        <div className="container-fluid pb-5">
          <div className="container pb-5">
            <div className="row">
              <div className="col-md-4">
                <div className="d-flex mb-4 mb-lg-0">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
                    style={{ height: 100, width: 100 }}
                  >
                    <i className="fa fa-2x fa-money-check-alt text-white" />
                  </div>
                  <div className="d-flex flex-column">
                    <h5 className="">Competitive Pricing</h5>
                    <p className="m-0">
                      Magna sit magna dolor duo dolor labore rebum amet elitr
                      est diam sea
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex mb-4 mb-lg-0">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
                    style={{ height: 100, width: 100 }}
                  >
                    <i className="fa fa-2x fa-award text-white" />
                  </div>
                  <div className="d-flex flex-column">
                    <h5 className="">Best Services</h5>
                    <p className="m-0">
                      Magna sit magna dolor duo dolor labore rebum amet elitr
                      est diam sea
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex mb-4 mb-lg-0">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
                    style={{ height: 100, width: 100 }}
                  >
                    <i className="fa fa-2x fa-globe text-white" />
                  </div>
                  <div className="d-flex flex-column">
                    <h5 className="">Worldwide Coverage</h5>
                    <p className="m-0">
                      Magna sit magna dolor duo dolor labore rebum amet elitr
                      est diam sea
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature End */}
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
              <h1>Explore Top Destination in Bharat</h1>
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
                    <h5 className="text-white">Kolkata</h5>
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
                    <h5 className="text-white">Delhi</h5>
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
                    <h5 className="text-white">Mumbai</h5>
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
                    <h5 className="text-white">Chennai</h5>
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
                    <h5 className="text-white">Bangalore</h5>
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
                    <h5 className="text-white">Hyderabad</h5>
                    <span>100 Cities</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Destination Start */}
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
            </div>
          </div>
        </div>
        {/* Service End */}
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
                        Varanasi
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
                      India.`.substring(0, 90)}
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
        {/* Registration Start */}
        <div
          className="container-fluid bg-registration py-5"
          style={{ margin: "90px 0" }}
        >
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-7 mb-5 mb-lg-0">
                <div className="mb-4">
                  <h6
                    className="text-primary text-uppercase"
                    style={{ letterSpacing: 5 }}
                  >
                    Mega Offer
                  </h6>
                  <h1 className="text-white">
                    <span className="text-primary">30% OFF</span> For Book from
                    TravelBaharat
                  </h1>
                </div>
                <p className="text-white">
                  Invidunt lorem justo sanctus clita. Erat lorem labore ea,
                  justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea
                  justo. Erat justo sed sed diam. Ea et erat ut sed diam sea
                  ipsum est dolor
                </p>
                <ul className="list-inline text-white m-0">
                  <li className="py-2">
                    <i className="fa fa-check text-primary mr-3" />
                    Labore eos amet dolor amet diam
                  </li>
                  <li className="py-2">
                    <i className="fa fa-check text-primary mr-3" />
                    Etsea et sit dolor amet ipsum
                  </li>
                  <li className="py-2">
                    <i className="fa fa-check text-primary mr-3" />
                    Diam dolor diam elitripsum vero.
                  </li>
                </ul>
              </div>
              <div className="col-lg-5">
                <div className="card border-0">
                  <div className="card-header bg-primary text-center p-4">
                    <h1 className="text-white m-0">Sign Up Now</h1>
                  </div>
                  <div className="card-body rounded-bottom bg-white p-5">
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control p-4"
                          placeholder="Your name"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control p-4"
                          placeholder="Your email"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <select
                          className="custom-select px-4"
                          style={{ height: 47 }}
                        >
                          <option value="">Select a destination</option>
                          <option value={1}>destination 1</option>
                          <option value={2}>destination 1</option>
                          <option value={3}>destination 1</option>
                        </select>
                      </div>
                      <div>
                        <button
                          className="btn btn-primary btn-block py-3"
                          type="submit"
                        >
                          Sign Up Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Registration End */}
        {/* Team Start */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
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
                        href=""
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        href=""
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        href=""
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        href=""
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
                        href=""
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        href=""
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        href=""
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        href=""
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
                        href=""
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        href=""
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        href=""
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        href=""
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
                        href=""
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        href=""
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        href=""
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-square"
                        href=""
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
        {/* Team End */}
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
                  className="img-fluid mx-auto"
                  src={testimonial1}
                  style={{ width: 100, height: 100 }}
                  alt="testimonial1"
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
                  className="img-fluid mx-auto"
                  src={testimonial2}
                  style={{ width: 100, height: 100 }}
                  alt="testimonial2"
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
                  className="img-fluid mx-auto"
                  src={testimonial3}
                  style={{ width: 100, height: 100 }}
                  alt="testimonial3"
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
                  className="img-fluid mx-auto"
                  src={testimonial4}
                  style={{ width: 100, height: 100 }}
                  alt="testimonial4"
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
        {/* Blog Start */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                Our Blog
              </h6>
              <h1>Latest From Our Blog</h1>
            </div>
            <div className="row pb-3">
              <div className="col-lg-4 col-md-6 mb-4 pb-2">
                <div className="blog-item">
                  <div className="position-relative">
                    <img className="img-fluid w-100" src={blog1} alt="blog1" />
                    <div className="blog-date">
                      <h6 className="font-weight-bold mb-n1">01</h6>
                      <small className="text-white text-uppercase">Jan</small>
                    </div>
                  </div>
                  <div className="bg-white p-4">
                    <div className="d-flex mb-2">
                      <Link
                        className="text-primary text-uppercase text-decoration-none"
                        href=""
                      >
                        Admin
                      </Link>
                      <span className="text-primary px-2">|</span>
                      <Link
                        className="text-primary text-uppercase text-decoration-none"
                        href=""
                      >
                        Tours &amp; Travel
                      </Link>
                    </div>
                    <Link className="h5 m-0 text-decoration-none" href="">
                      Dolor justo sea kasd lorem clita justo diam amet
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 pb-2">
                <div className="blog-item">
                  <div className="position-relative">
                    <img className="img-fluid w-100" src={blog2} alt="blog2" />
                    <div className="blog-date">
                      <h6 className="font-weight-bold mb-n1">01</h6>
                      <small className="text-white text-uppercase">Jan</small>
                    </div>
                  </div>
                  <div className="bg-white p-4">
                    <div className="d-flex mb-2">
                      <Link
                        className="text-primary text-uppercase text-decoration-none"
                        href=""
                      >
                        Admin
                      </Link>
                      <span className="text-primary px-2">|</span>
                      <Link
                        className="text-primary text-uppercase text-decoration-none"
                        href=""
                      >
                        Tours &amp; Travel
                      </Link>
                    </div>
                    <Link className="h5 m-0 text-decoration-none" href="">
                      Dolor justo sea kasd lorem clita justo diam amet
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 pb-2">
                <div className="blog-item">
                  <div className="position-relative">
                    <img className="img-fluid w-100" src={blog3} alt="blog3" />
                    <div className="blog-date">
                      <h6 className="font-weight-bold mb-n1">01</h6>
                      <small className="text-white text-uppercase">Jan</small>
                    </div>
                  </div>
                  <div className="bg-white p-4">
                    <div className="d-flex mb-2">
                      <Link
                        className="text-primary text-uppercase text-decoration-none"
                        href=""
                      >
                        Admin
                      </Link>
                      <span className="text-primary px-2">|</span>
                      <Link
                        className="text-primary text-uppercase text-decoration-none"
                        href=""
                      >
                        Tours &amp; Travel
                      </Link>
                    </div>
                    <Link className="h5 m-0 text-decoration-none" href="">
                      Dolor justo sea kasd lorem clita justo diam amet
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog End */}
      </>
    </div>
  );
};
export default Home;
