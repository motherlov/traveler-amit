import { Link, useParams } from "react-router-dom";
import {
  blog,
  defaultProfilePic,
  dummyImage,
} from "../../../../Image/Image";
import PageHeader from "../../PageHeader/PageHeader";
import Booking from "../../Booking/Booking";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../../../Redux/features/products/productSlice";
import { useEffect, useState } from "react";
import { image, profile_pic } from "../../../../Helper/Helper";
import { Skeleton } from "@mui/material";

const BlogDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [currentMonth, setCurrentMonth] = useState("");

  const user = useSelector((state) => state.auth.user);
  const { productDetails, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductDetail(productId));
  }, [dispatch, productId]);

  const pageTitle = "Blog Detail";
  const breadcrumbLinks = [
    { label: "Home", url: "/" },
    { label: "Blog Detail", url: "/blog_details" },
  ];

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const month = date.toLocaleDateString("en-US", { month: "short" });
      setCurrentMonth(month);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <PageHeader pageTitle={pageTitle} breadcrumbLinks={breadcrumbLinks} />
      <Booking />
      <>
        {/* Blog Start */}

        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-8">
                {/* Blog Detail Start */}
                {status === "succeeded" ? (
                  <div className="pb-3">
                    <div className="blog-item">
                      <div className="position-relative">
                        <img
                          className="img-fluid w-100"
                          src={
                            productDetails?.image
                              ? image(productDetails?.image)
                              : dummyImage
                          }
                          alt={productDetails.title}
                          onError={(e) => {
                            e.target.src = dummyImage;
                          }}
                        />
                        <div className="blog-date">
                          <h6 className="font-weight-bold mb-n1">
                            {" "}
                            {formatDate(productDetails.createdAt)}
                          </h6>
                          <small className="text-white text-uppercase">
                            {" "}
                            {currentMonth}
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white mb-3" style={{ padding: 30 }}>
                      <div className="d-flex mb-3">
                        <Link
                          className="text-primary text-uppercase text-decoration-none"
                          to=""
                        >
                          Admin
                        </Link>
                        <span className="text-primary px-2">|</span>
                        <Link
                          className="text-primary text-uppercase text-decoration-none"
                          to=""
                        >
                          Tours &amp; Travel
                        </Link>
                      </div>
                      <h2 className="mb-3">{productDetails.title}</h2>
                      <p>{productDetails.description}</p>
                    </div>
                  </div>
                ) : (
                  <div className="row">
                    {[...Array(6)].map((_, index) => (
                      <div key={index} className="col-md-6 mb-4 pb-2">
                        <Skeleton
                          variant="rectangular"
                          width={260}
                          height={168}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Blog Detail End */}
                {/* Comment List Start */}
                <div
                  className="bg-white"
                  style={{ padding: 30, marginBottom: 30 }}
                >
                  <h4
                    className="text-uppercase mb-4"
                    style={{ letterSpacing: 5 }}
                  >
                    3 Comments
                  </h4>
                  <div className="media mb-4">
                    <img
                      src={
                        user?.profile_pic
                          ? profile_pic(user?.profile_pic)
                          : defaultProfilePic
                      }
                      alt="user"
                      className="img-fluid mr-3 mt-1"
                      style={{ width: 45 }}
                    />
                    <div className="media-body">
                      <h6>
                        <Link to="">
                          {user.first_name} {user.last_name}
                        </Link>{" "}
                        <small>
                          <i>01 Jan 2045</i>
                        </small>
                      </h6>
                      <p>
                        Diam amet duo labore stet elitr invidunt ea clita ipsum
                        voluptua, tempor labore accusam ipsum et no at. Kasd
                        diam tempor rebum magna dolores sed sed eirmod ipsum.
                        Gubergren clita aliquyam consetetur sadipscing, at
                        tempor amet ipsum diam tempor consetetur at sit.
                      </p>
                      <button className="btn btn-sm btn-outline-primary">
                        Reply
                      </button>
                    </div>
                  </div>
                  <div className="media">
                    <img
                      src={
                        user?.profile_pic
                          ? profile_pic(user?.profile_pic)
                          : defaultProfilePic
                      }
                      alt="user"
                      className="img-fluid mr-3 mt-1"
                      style={{ width: 45 }}
                    />
                    <div className="media-body">
                      <h6>
                        <Link to="">
                          {user.first_name} {user.last_name}
                        </Link>{" "}
                        <small>
                          <i>01 Jan 2045</i>
                        </small>
                      </h6>
                      <p>
                        Diam amet duo labore stet elitr invidunt ea clita ipsum
                        voluptua, tempor labore accusam ipsum et no at. Kasd
                        diam tempor rebum magna dolores sed sed eirmod ipsum.
                        Gubergren clita aliquyam consetetur sadipscing, at
                        tempor amet ipsum diam tempor consetetur at sit.
                      </p>
                      <button className="btn btn-sm btn-outline-primary">
                        Reply
                      </button>
                      <div className="media mt-4">
                        <img
                          src={
                            user?.profile_pic
                              ? profile_pic(user?.profile_pic)
                              : defaultProfilePic
                          }
                          alt="user"
                          className="img-fluid mr-3 mt-1"
                          style={{ width: 45 }}
                        />
                        <div className="media-body">
                          <h6>
                            <Link to="">
                              {" "}
                              {user.first_name} {user.last_name}
                            </Link>{" "}
                            <small>
                              <i>01 Jan 2045</i>
                            </small>
                          </h6>
                          <p>
                            Diam amet duo labore stet elitr invidunt ea clita
                            ipsum voluptua, tempor labore accusam ipsum et no
                            at. Kasd diam tempor rebum magna dolores sed sed
                            eirmod ipsum. Gubergren clita aliquyam consetetur
                            sadipscing, at tempor amet ipsum diam tempor
                            consetetur at sit.
                          </p>
                          <button className="btn btn-sm btn-outline-primary">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Comment List End */}
                {/* Comment Form Start */}
                <div className="bg-white mb-3" style={{ padding: 30 }}>
                  <h4
                    className="text-uppercase mb-4"
                    style={{ letterSpacing: 5 }}
                  >
                    Leave a comment
                  </h4>
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="website">Website</label>
                      <input type="url" className="form-control" id="website" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        cols={30}
                        rows={5}
                        className="form-control"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group mb-0">
                      <input
                        type="submit"
                        defaultValue="Leave a comment"
                        className="btn btn-primary font-weight-semi-bold py-2 px-3"
                      />
                    </div>
                  </form>
                </div>
                {/* Comment Form End */}
              </div>
              <div className="col-lg-4 mt-5 mt-lg-0">
                {/* Author Bio */}
                <div className="d-flex flex-column text-center bg-white mb-5 py-5 px-4">
                  <img
                    src={
                      user?.profile_pic
                        ? profile_pic(user?.profile_pic)
                        : defaultProfilePic
                    }
                    alt="user"
                    className="img-fluid mx-auto mb-3"
                    style={{ width: 100, borderRadius: "50%", height: 100 }}
                  />
                  <h3 className="text-primary mb-3">
                    {user.first_name} {user.last_name}
                  </h3>
                  <p>
                    I'm a frontend developer specializing in crafting visually
                    appealing and user-centric web experiences. Proficient in
                    HTML, CSS, JavaScript, and modern frameworks like React, I'm
                    passionate about turning design concepts into seamless,
                    performant websites. Let's create something exceptional
                    together! 👨‍💻✨
                  </p>
                  <div className="d-flex justify-content-center">
                    <Link className="text-primary px-2" to="">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link className="text-primary px-2" to="">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link className="text-primary px-2" to="">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link className="text-primary px-2" to="">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link className="text-primary px-2" to="">
                      <i className="fab fa-youtube" />
                    </Link>
                  </div>
                </div>
                {/* Search Form */}
                <div className="mb-5">
                  <div className="bg-white" style={{ padding: 30 }}>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control p-4"
                        placeholder="Keyword"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text bg-primary border-primary text-white">
                          <i className="fa fa-search" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Category List */}
                <div className="mb-5">
                  <h4
                    className="text-uppercase mb-4"
                    style={{ letterSpacing: 5 }}
                  >
                    Categories
                  </h4>
                  <div className="bg-white" style={{ padding: 30 }}>
                    <ul className="list-inline m-0">
                      <li className="mb-3 d-flex justify-content-between align-items-center">
                        <Link className="text-dark" to="#">
                          <i className="fa fa-angle-right text-primary mr-2" />
                          Web Design
                        </Link>
                        <span className="badge badge-primary badge-pill">
                          150
                        </span>
                      </li>
                      <li className="mb-3 d-flex justify-content-between align-items-center">
                        <Link className="text-dark" to="#">
                          <i className="fa fa-angle-right text-primary mr-2" />
                          Web Development
                        </Link>
                        <span className="badge badge-primary badge-pill">
                          131
                        </span>
                      </li>
                      <li className="mb-3 d-flex justify-content-between align-items-center">
                        <Link className="text-dark" to="#">
                          <i className="fa fa-angle-right text-primary mr-2" />
                          Online Marketing
                        </Link>
                        <span className="badge badge-primary badge-pill">
                          78
                        </span>
                      </li>
                      <li className="mb-3 d-flex justify-content-between align-items-center">
                        <Link className="text-dark" to="#">
                          <i className="fa fa-angle-right text-primary mr-2" />
                          Keyword Research
                        </Link>
                        <span className="badge badge-primary badge-pill">
                          56
                        </span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center">
                        <Link className="text-dark" to="#">
                          <i className="fa fa-angle-right text-primary mr-2" />
                          Email Marketing
                        </Link>
                        <span className="badge badge-primary badge-pill">
                          98
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Recent Post */}
                <div className="mb-5">
                  <h4
                    className="text-uppercase mb-4"
                    style={{ letterSpacing: 5 }}
                  >
                    Recent Post
                  </h4>
                  <Link
                    className="d-flex align-items-center text-decoration-none bg-white mb-3"
                    to=""
                  >
                    <img className="img-fluid" src={blog} alt="" />
                    <div className="pl-3">
                      <h6 className="m-1">
                        Diam lorem dolore justo eirmod lorem dolore
                      </h6>
                      <small>Jan 01, 2050</small>
                    </div>
                  </Link>
                  <Link
                    className="d-flex align-items-center text-decoration-none bg-white mb-3"
                    to=""
                  >
                    <img className="img-fluid" src={blog} alt="" />
                    <div className="pl-3">
                      <h6 className="m-1">
                        Diam lorem dolore justo eirmod lorem dolore
                      </h6>
                      <small>Jan 01, 2050</small>
                    </div>
                  </Link>
                  <Link
                    className="d-flex align-items-center text-decoration-none bg-white mb-3"
                    to=""
                  >
                    <img className="img-fluid" src={blog} alt="" />
                    <div className="pl-3">
                      <h6 className="m-1">
                        Diam lorem dolore justo eirmod lorem dolore
                      </h6>
                      <small>Jan 01, 2050</small>
                    </div>
                  </Link>
                </div>
                {/* Tag Cloud */}
                <div className="mb-5">
                  <h4
                    className="text-uppercase mb-4"
                    style={{ letterSpacing: 5 }}
                  >
                    Tag Cloud
                  </h4>
                  <div className="d-flex flex-wrap m-n1">
                    <Link to="" className="btn btn-light m-1">
                      Design
                    </Link>
                    <Link to="" className="btn btn-light m-1">
                      Development
                    </Link>
                    <Link to="" className="btn btn-light m-1">
                      Marketing
                    </Link>
                    <Link to="" className="btn btn-light m-1">
                      SEO
                    </Link>
                    <Link to="" className="btn btn-light m-1">
                      Writing
                    </Link>
                    <Link to="" className="btn btn-light m-1">
                      Consulting
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
export default BlogDetail;
