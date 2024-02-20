import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchProductList,
  getProductDetail,
  updateProductDetail,
} from "../../../Redux/features/products/productSlice";
import { image } from "../../../Helper/Helper";
import { travel } from "../../../Image/Image";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

const UpdateProduct = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);
  const [fileError, setFileError] = useState(null);
  const productDetails = useSelector((state) => state.products.productDetails);

  const schema = z.object({
    title: z.string().min(4, "Product name must be at least 4 characters long"),
    description: z
      .string()
      .min(20, "Description must be at least 20 characters long"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: zodResolver(schema) });

  const validateProductImage = (file) => {
    // console.log("File:", file);
    if (!file) {
      setFileError(null);
      return true;
    }

    const allowedExtensions = ["jpg", "jpeg", "png", "gif", "webp"];
    const maxFileSize = 5 * 1024 * 1024;

    let fileName = "";

    if (typeof file === "string") {
      fileName = file;
    } else if (file instanceof File) {
      fileName = file.name;
    } else {
      setFileError("Invalid file type.");
      return false;
    }
    const fileExtension = fileName.split(".").pop().toLowerCase().trim();
    console.log(fileExtension);
    if (!fileName || !fileExtension) {
      setFileError("File name or extension is missing.");
      return false;
    }

    if (!allowedExtensions.includes(fileExtension)) {
      // console.log("Invalid file type detected.");
      setFileError(
        "Invalid file type. Allowed types: jpg, jpeg, png, gif, webp."
      );
      return false;
    }

    if (file.size > maxFileSize) {
      setFileError("File size exceeds the maximum limit (5MB).");
      return false;
    }
    setFileError(null);
    return true;
  };

  useEffect(() => {
    dispatch(getProductDetail(productId));
  }, [dispatch, productId]);

  const onSubmit = async (data) => {
    const isValidImage = validateProductImage(
      selectedImage || productDetails.image
    );
    if (!isValidImage) {
      return;
    }
    const formData = new FormData();
    formData.append("id", productId);
    formData.append("title", data.title);
    formData.append("description", data.description);

    // console.log("selectedImage:", selectedImage);
    // console.log("productDetails.image:", productDetails.image);

    if (selectedImage) {
      formData.append("image", selectedImage);
    } else {
      formData.append("image", productDetails.image);
    }

    dispatch(updateProductDetail(formData)).then(() =>
      dispatch(fetchProductList())
    );
    navigate("/blog");
  };

  useEffect(() => {
    if (productDetails) {
      setValue("title", productDetails.title);
      setValue("description", productDetails.description);
    }
  }, [productDetails, setValue]);

  return (
    <div>
      {" "}
      <main id="main">
        <section className="mt-5">
          <div className="container py-4 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100 mt-5">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img src={travel} className="img-fluid" alt="travelling" />
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <h1 className="text-success">Update Your Blog</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form1Example13">
                    Blog Title
                    </label>
                    <input
                      className="form-control form-control-lg"
                      placeholder="Update Your Blog Title"
                      {...register("title")}
                    />
                    {errors.title && (
                      <span style={{ color: "red" }}>
                        {errors.title.message}
                      </span>
                    )}
                  </div>

                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form1Example13">
                      Blog Description
                    </label>
                    <textarea
                      className="form-control form-control-lg"
                      placeholder="Update Your Blog Description"
                      {...register("description")}
                    />
                    {errors.description && (
                      <span style={{ color: "red" }}>
                        {errors.description.message}
                      </span>
                    )}
                  </div>

                  <div className="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                     Blog Image
                    </label>
                    <input
                      type="file"
                      onChange={(e) => {
                        setFileError(null);
                        setSelectedImage(e.target.files[0]);
                      }}
                      name="img"
                      accept="image/*"
                      class="form-control"
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
                        {productDetails?.image === "" ? (
                          <img
                            height="70px"
                            src={image}
                            alt=""
                            className="upload-img"
                          />
                        ) : (
                          <img
                            height="60px"
                            src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${productDetails?.image}`}
                            alt=""
                            className="upload-img"
                          />
                        )}
                        {selectedImage === "" && (
                          <p>Drag or drop content here</p>
                        )}
                      </>
                    )}
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-success btn-lg btn-block"
                    >
                      Update Your Blog
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default UpdateProduct;
