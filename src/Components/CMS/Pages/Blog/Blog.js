import { Link } from "react-router-dom";
import { blog, dummyImage, defaultProfilePic } from "../../../../Image/Image";
import PageHeader from "../../PageHeader/PageHeader";
import Booking from "../../Booking/Booking";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  deleteProduct,
  fetchProductList,
} from "../../../../Redux/features/products/productSlice";
import { image, profile_pic } from "../../../../Helper/Helper";
import { profileDetails } from "../../../../Redux/features/auth/authSlice";
import SweetAlertComponent from "../../../../sweetalert/sweetalert";
import { Pagination, Skeleton } from "@mui/material";

const Blog = () => {
  const pageTitle = "Blog";
  const breadcrumbLinks = [
    { label: "Home", url: "/" },
    { label: "Blog", url: "/blog" },
  ];

  const dispatch = useDispatch();
  const { productList, totalPages, status } = useSelector(
    (state) => state.products
  );
  console.log(productList);
  const user = useSelector((state) => state.auth.user);
  const [totalRecords, setTotalRecords] = useState();
  // console.log(productList,totalPages);

  const [productId, setProductId] = useState();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(fetchProductList());
    dispatch(profileDetails());
  }, [dispatch]);

  const [currentMonth, setCurrentMonth] = useState("");

  const handlePageChange = (e, pageNo) => {
    console.log(pageNo);
    setTotalRecords(pageNo);

    dispatch(
      fetchProductList({
        page: pageNo,
        // perpage: 10,
      })
    );
  };

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

  const handleDelete = () => {
    if (productId) {
      dispatch(deleteProduct({ id: productId }))
        .then(() => {
          dispatch(fetchProductList());
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
        })
        .finally(() => {
          setOpenModal(false);
          setProductId(null);
        });
    }
  };

  return (
    <div>
      <PageHeader pageTitle={pageTitle} breadcrumbLinks={breadcrumbLinks} />
      <Booking />
      <>
        <>
          {/* Blog Start */}
          <div className="container-fluid py-5">
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-8">
                  <div className="row pb-3">
                    {status === "succeeded" ? (
                      productList.map((product) => (
                        <div
                          className="col-md-6 mb-4 pb-2"
                          id={product._id}
                          key={product._id}
                        >
                          <div className="blog-item">
                            <div className="position-relative">
                              <img
                                className="img-fluid w-100"
                                src={
                                  product?.image
                                    ? image(product?.image)
                                    : dummyImage
                                }
                                alt="blog1"
                                onError={(e) => {
                                  e.target.src = dummyImage;
                                }}
                                style={{ height: "35vh", width: "35vw" }}
                              />
                              <div className="blog-date">
                                <h6 className="font-weight-bold mb-n1">
                                  {formatDate(product.createdAt)}
                                </h6>
                                <small className="text-white text-uppercase">
                                  {currentMonth}
                                </small>
                              </div>
                            </div>
                            <div className="bg-white p-4">
                              <div className="d-flex mb-2">
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
                              <h4
                                className="text-primary"
                                style={{ letterSpacing: 1 }}
                              >
                                {product.title.substring(0, 90)}
                              </h4>
                              <h6 style={{ color: "#7ab730" }}>
                                {product.description.substring(0, 120)}...{" "}
                                <Link
                                  className="h4 m-0 text-decoration-none  btn btn-primary mt-1"
                                  to={`/product/${product._id}`}
                                >
                                  Read More
                                </Link>
                              </h6>
                              <br />
                              <div className="d-flex justify-content-between">
                                <button
                                  className="btn btn-outline-danger"
                                  onClick={() => {
                                    setProductId(product._id);
                                    setOpenModal(true);
                                  }}
                                >
                                  Delete
                                </button>
                                <Link
                                  to={`/update/${product._id}`}
                                  className="btn btn-outline-info"
                                  onClick={() => {
                                    setProductId(product._id);
                                    setOpenModal(true);
                                  }}
                                >
                                  Edit
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="row">
                        {[...Array(10)].map((_, index) => (
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

                    <div className="col-12">
                      <nav aria-label="Page navigation">
                        {productList.length !== 0 ? (
                          <Pagination
                            count={totalPages}
                            onChange={handlePageChange}
                            totalRecords={totalRecords}
                            sx={{
                              "& .MuiPagination-ul": {
                                display: "flex",
                                justifyContent: "center",
                                backgroundColor: "white",
                                padding: "0.5rem",
                              },
                              "& .MuiPaginationItem-root": {
                                position: "relative",
                                display: "block",

                                marginLeft: -"1px",
                                lineHeight: "1.25",
                                color: "#7ab730",
                                backgroundColor: "#fff",
                                border: " 1px solid #dee2e6",
                                fontSize: "1.5rem",
                              },
                              "& .MuiPaginationItem-page": {
                                borderRadius: "0",
                              },
                              "& .MuiPaginationItem-page.Mui-selected": {
                                zIndex: "3",
                                color: "#fff",
                                textDecoration: "none",
                                backgroundColor: "#7ab730",
                                borderColor: "#7ab730",
                              },
                              "& .MuiPaginationItem-page:hover": {
                                zIndex: "2",
                                color: "#527a20",
                                textDecoration: "none",
                                backgroundColor: "#e9ecef",
                                borderColor: "#dee2e6",
                              },
                            }}
                          />
                        ) : (
                          <></>
                        )}
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-5 mt-lg-0">
                  {/* Author Bio */}
                  <div className="d-flex flex-column text-center bg-white mb-5 py-5 px-4">
                    <img
                      src={
                        user?.profile_pic
                          ? profile_pic(user?.profile_pic)
                          : { defaultProfilePic }
                      }
                      alt="user"
                      className="img-fluid mx-auto mb-3"
                      style={{ width: 100, borderRadius: "50%", height: 100 }}
                    />
                    <h3 className="text-primary mb-3">
                      {user.first_name} {user.last_name}
                    </h3>
                    <p>
                    I'm a frontend developer specializing in crafting visually appealing and user-centric web experiences. Proficient in HTML, CSS, JavaScript, and modern frameworks like React, I'm passionate about turning design concepts into seamless, performant websites. Let's create something exceptional together! 👨‍💻✨
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
                      <img className="img-fluid" src={blog} alt="blog" />
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
                      <img className="img-fluid" src={blog} alt="blog" />
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
                      <img className="img-fluid" src={blog} alt="blog" />
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
      </>
      {openModal && (
        <SweetAlertComponent
          confirm={() => {
            Swal.fire({
              title: "Are you sure?",
              text: "You will not be able to recover!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#024b98",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
              cancelButtonText: "No, cancel",
            }).then((result) => {
              if (result.isConfirmed) {
                handleDelete();
                setOpenModal(false);
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                setOpenModal(false);
              }
            });
          }}
          title="Are you sure?"
          subtitle="You will not be able to recover!"
        />
      )}
    </div>
  );
};
export default Blog;
