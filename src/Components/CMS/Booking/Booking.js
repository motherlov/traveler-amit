import React from "react";

const Booking = () => {
  return (
    <div>
      {/* Booking Start */}
      <div className="container-fluid booking mt-5 pb-5">
        <div className="container pb-5">
          <div className="bg-light shadow" style={{ padding: 30 }}>
            <div className="row align-items-center" style={{ minHeight: 60 }}>
              <div className="col-md-10">
                <div className="row">
                  {/* Destination Select */}
                  <div className="col-md-3">
                    <div className="mb-3 mb-md-0">
                      <select
                        className="custom-select px-4"
                        style={{ height: 47 }}
                      >
                        <option value="">Destination</option>
                        <option value={1}>Destination 1</option>
                        <option value={2}>Destination 2</option>
                        <option value={3}>Destination 3</option>
                      </select>
                    </div>
                  </div>
                  {/* Depart Date Input */}
                  <div className="col-md-3">
                    <div className="mb-3 mb-md-0">
                      <div
                        className="date"
                        id="date1"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control p-4 datetimepicker-input"
                          placeholder="Depart Date"
                          data-target="#date1"
                          data-toggle="datetimepicker"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Return Date Input */}
                  <div className="col-md-3">
                    <div className="mb-3 mb-md-0">
                      <div
                        className="date"
                        id="date2"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control p-4 datetimepicker-input"
                          placeholder="Return Date"
                          data-target="#date2"
                          data-toggle="datetimepicker"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Duration Select */}
                  <div className="col-md-3">
                    <div className="mb-3 mb-md-0">
                      <select
                        className="custom-select px-4"
                        style={{ height: 47 }}
                      >
                        <option value="">Duration</option>
                        <option value={1}>Duration 1</option>
                        <option value={2}>Duration 2</option>
                        <option value={3}>Duration 3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-primary btn-block"
                  type="submit"
                  style={{ height: 47, marginTop: "-2px" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking End */}
    </div>
  );
};

export default Booking;
