import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../../Redux/features/auth/authSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { FidgetSpinner } from "react-loader-spinner";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { redirect, status } = useSelector((state) => state.auth);

  const [selectedImage, setSelectedImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [fileError, setFileError] = useState(null);

  const schema = z.object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .refine(
        (value) =>
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value),
        {
          message: "Invalid email format",
        }
      ),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .refine(
        (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value),
        {
          message: `It must contain at least one lowercase letter
        It must contain at least one uppercase letter.
        It must contain at least one digit.
        It must have a minimum length of 8 characters.`,
        }
      ),
  });

  const validateProfileImage = (file) => {
    if (!file) {
      setFileError("Please select a profile image.");
      return false;
    }

    const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
    const maxFileSize = 5 * 1024 * 1024;

    const fileName = file.name.toLowerCase();
    const fileExtension = fileName.split(".").pop();

    if (!allowedExtensions.includes(fileExtension)) {
      setFileError("Invalid file type. Allowed types: jpg, jpeg, png, gif.");
      return false;
    }

    if (file.size > maxFileSize) {
      setFileError("File size exceeds the maximum limit (5MB).");
      return false;
    }

    setFileError(null);
    return true;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    const isValidImage = validateProfileImage(selectedImage);
    if (!isValidImage) {
      return;
    }
    const formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("profile_pic", selectedImage);
    dispatch(signup(formData));
  };

  useEffect(() => {
    const RedirectUser = () => {
      let username = localStorage.getItem("username");
      let isInRegisterPage =
        window.location.pathname.toLowerCase() === "/register";

      if (username !== null && username !== undefined && username !== "") {
        isInRegisterPage && navigate("/login");
      }
    };
    RedirectUser();
  }, [redirect, navigate]);



  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      {" "}
      <main id="main">
        <section className="mt-5">
          <div className="container  h-100">
            <div className="row d-flex align-items-center justify-content-center h-100 mt-5">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="img-fluid"
                  alt="Phone"
                />
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <h1 className="text-success">Register</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form1Example13">
                      First Name
                    </label>
                    <input
                      className="form-control form-control-lg"
                      placeholder="Enter Your First Name"
                      {...register("first_name")}
                    />
                    {errors.first_name && (
                      <span style={{ color: "red" }}>
                        {errors.first_name.message}
                      </span>
                    )}
                  </div>

                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form1Example13">
                      Last name
                    </label>
                    <input
                      className="form-control form-control-lg"
                      placeholder="Enter Your Last Name"
                      {...register("last_name")}
                    />
                    {errors.last_name && (
                      <span style={{ color: "red" }}>
                        {errors.last_name.message}
                      </span>
                    )}
                  </div>

                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form1Example13">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="name@example.com"
                      {...register("email")}
                    />
                    {errors.email && (
                      <span style={{ color: "red" }}>
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form1Example23">
                      Password
                    </label>
                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="floatingPassword"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        {...register("password")}
                      />
                      <button
                        type="button"
                        className="btn  no-hover-effect"
                        onClick={toggleShowPassword}
                        style={{ border: "1px solid #ced4da" }}
                      >
                        <i
                          className={
                            showPassword
                              ? "bi bi-eye-fill"
                              : "bi bi-eye-slash-fill"
                          }
                        ></i>
                      </button>
                    </div>
                    {errors.password && (
                      <span style={{ color: "red" }}>
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Upload a Profile Picture
                    </label>
                    <input
                      type="file"
                      onChange={(e) => {
                        setFileError(null);
                        setSelectedImage(e.target.files[0]);
                      }}
                      name="img"
                      accept="image/*"
                      className="form-control"
                    />
                    {fileError && (
                      <span style={{ color: "red" }}>{fileError}</span>
                    )}
                    {selectedImage !== "" &&
                    selectedImage !== undefined &&
                    selectedImage !== null ? (
                      <img
                        style={{ height: "180px" }}
                        src={URL.createObjectURL(selectedImage)}
                        alt=""
                        className="upload-img"
                      />
                    ) : (
                      <>
                        {selectedImage === "" && (
                          <p>Drag or drop content here</p>
                        )}
                      </>
                    )}
                  </div>
                  {status === "loading" ? (
                    <>
                      <button
                        type="submit"
                        disabled
                        style={{
                          paddingLeft: "2.5rem",
                          paddingRight: "2.5rem",
                        }}
                        className="btn btn-success btn-lg btn-block"
                      >
                        <FidgetSpinner
                          visible={true}
                          height="32"
                          width="120"
                          ariaLabel="dna-loading"
                          wrapperStyle={{}}
                          wrapperClass="dna-wrapper"
                          ballColors={["#ff0000", "#00ff00", "#0000ff"]}
                          backgroundColor="#F4442E"
                        />
                      </button>
                      <div className="divider d-flex align-items-center my-3">
                        <p className="text-center fw-bold mx-3 mb-0 text-muted">
                          ALREADY HAVE AN ACCOUNT?{" "}
                          <Link to="/login">
                            <b>lOGIN</b>
                          </Link>
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <button
                        type="submit"
                        className="btn btn-success btn-lg btn-block"
                        onClick={handleSubmit}
                      >
                        REGISTER
                      </button>
                      <div className="divider d-flex align-items-center my-3">
                        <p className="text-center fw-bold mx-3 mb-0 text-muted">
                          ALREADY HAVE AN ACCOUNT?{" "}
                          <Link to="/login">
                            <b>lOGIN</b>
                          </Link>
                        </p>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Register;
