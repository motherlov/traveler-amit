import Booking from "../Booking/Booking";
import PageHeader from "../PageHeader/PageHeader";

const Contact = () => {
    const pageTitle = "Contact";
    const breadcrumbLinks = [
      { label: "Home", url: "/" },
      { label: "Contact", url: "/contact" },
    ];
  return (
    <div>
      <PageHeader pageTitle={pageTitle} breadcrumbLinks={breadcrumbLinks} />
      <Booking />
      <>
        {/* Contact Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="text-center mb-3 pb-3">
              <h6
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                Contact
              </h6>
              <h1>Contact For Any Query</h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="contact-form bg-white" style={{ padding: 30 }}>
                  <div id="success" />
                  <form
                    name="sentMessage"
                    id="contactForm"
                    noValidate="novalidate"
                  >
                    <div className="form-row">
                      <div className="control-group col-sm-6">
                        <input
                          type="text"
                          className="form-control p-4"
                          id="name"
                          placeholder="Your Name"
                          required="required"
                          data-validation-required-message="Please enter your name"
                        />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="control-group col-sm-6">
                        <input
                          type="email"
                          className="form-control p-4"
                          id="email"
                          placeholder="Your Email"
                          required="required"
                          data-validation-required-message="Please enter your email"
                        />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <input
                        type="text"
                        className="form-control p-4"
                        id="subject"
                        placeholder="Subject"
                        required="required"
                        data-validation-required-message="Please enter a subject"
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <textarea
                        className="form-control py-3 px-4"
                        rows={5}
                        id="message"
                        placeholder="Message"
                        required="required"
                        data-validation-required-message="Please enter your message"
                        defaultValue={""}
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="text-center">
                      <button
                        className="btn btn-primary py-3 px-4"
                        type="submit"
                        id="sendMessageButton"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
      </>
    </div>
  );
};
export default Contact;
