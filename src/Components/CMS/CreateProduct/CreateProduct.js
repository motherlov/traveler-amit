import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  createProduct,
  fetchProductList,
} from "../../../Redux/features/products/productSlice";
import { useNavigate } from "react-router-dom";
import { travel } from "../../../Image/Image";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);
  const [fileError, setFileError] = useState(null);

  const schema = z.object({
    title: z.string().min(4, "Blog title is required"),
    description: z.string().min(20, "Blog Description is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const validateProductImage = (file) => {
    if (!file) {
      setFileError("Please select a product image.");
      return false;
    }

    const allowedExtensions = ["jpg", "jpeg", "png", "gif", "webp"];
    const maxFileSize = 5 * 1024 * 1024;

    const fileName = file.name || "";
    const fileExtension = fileName.split(".").pop().toLowerCase().trim();
    console.log({ fileName }, { fileExtension });
    if (!allowedExtensions.includes(fileExtension)) {
      setFileError(
        "Invalid file type. Allowed types: jpg, jpeg, png, gif,webp."
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

  const onSubmit = async (data) => {
    const isValidImage = validateProductImage(selectedImage);
    if (!isValidImage) {
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", selectedImage);

    dispatch(createProduct(formData)).then(() => dispatch(fetchProductList()));

    navigate("/blog");
  };

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
                <h1 className="text-success">Create Blog</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form1Example13">
                      Blog Title
                    </label>
                    <input
                      className="form-control form-control-lg"
                      placeholder="Enter Your Blog Title"
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
                      placeholder="Enter Your Blog Description"
                      {...register("description")}
                    />
                    {errors.description && (
                      <span style={{ color: "red" }}>
                        {errors.description.message}
                      </span>
                    )}
                  </div>

                  <div class="mb-3">
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
                      Create Your Blog
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
export default CreateProduct;
