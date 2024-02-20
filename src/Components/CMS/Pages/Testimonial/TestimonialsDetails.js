import React from "react";

const TestiMonialsDetails = ({ testiMonialDetail }) => {
  const { name, address, description, img } = testiMonialDetail;
  return (
    <div className="text-center mb-3 pb-3">
      <div class="item  testimonial-carousel">
        <div class="shadow-effect ">
          <div className="text-center pb-4">
            <img
              class="img-circle img-fluid mx-auto"
              src={img}
              alt={img}
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className="testimonial-text bg-white p-4 mt-n5">
            <p className="mt-5">{description}</p>
            <div class="testimonial-name">
              <h5 className="text-truncate">{name}</h5>
              <small>{address}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestiMonialsDetails;
