import {
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
} from "../../../../Image/Image";
import Booking from "../../Booking/Booking";
import PageHeader from "../../PageHeader/PageHeader";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TestiMonialsDetails from "./TestimonialsDetails";

const Testimonial = () => {
  const testiMonials = [
    {
      name: "Rekob Ramya",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: testimonial1,
    },
    {
      name: "Brandon Savage",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: testimonial2,
    },
    {
      name: "Steve Burns",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: testimonial3,
    },
    {
      name: "Kevin Canlas",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: testimonial4,
    },
  ];
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 1,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  const pageTitle = "Testimonial";
  const breadcrumbLinks = [
    { label: "Home", url: "/" },
    { label: "Testimonial", url: "/testimonial" },
  ];
  return (
    <div>
      <PageHeader pageTitle={pageTitle} breadcrumbLinks={breadcrumbLinks} />
      <Booking />
      <section
        id="testimonial"
        className="testimonials container-fluid py-5 pt-70 pb-70"
      >
        <div className="container mt-5">
          <div className="text-center mb-3 pb-3">
            <h6
              className="text-primary text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Testimonial
            </h6>
            <h1>What Say Our Clients Sayings?</h1>
          </div>

          <div className="row">
            <div className="col-md-12">
              <OwlCarousel
                id="customer-testimonoals"
                className="owl-carousel owl-theme testimonial-carousel"
                {...options}
              >
                {testiMonials.length === 0 ? (
                  <div className="owl-carousel testimonial-carousel">
                    <div className="text-center pb-4">
                      <img
                        className="img-fluid mx-auto"
                        src={testiMonials}
                        style={{ width: "100px", height: "100px" }}
                        alt="Client Avatar"
                      />
                      <div className="testimonial-text bg-white p-4 mt-n5">
                        <p className="mt-5">
                          Dolor et eos labore, stet justo sed est sed. Diam sed
                          sed dolor stet amet eirmod eos labore diam
                        </p>
                        <h5 className="text-truncate">Client Name</h5>
                        <span>Profession</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  testiMonials.map((testiMonialDetail) => {
                    return (
                      <TestiMonialsDetails
                        testiMonialDetail={testiMonialDetail}
                        key={testiMonialDetail._key}
                      />
                    );
                  })
                )}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Testimonial;
