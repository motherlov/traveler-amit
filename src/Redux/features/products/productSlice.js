import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../Helper/Helper";
import { toast } from "react-toastify";

export const createProduct = createAsyncThunk(
  "/product/create",
  async (formData) => {
    const res = await axiosInstance.post(`/product/create`, formData);
    const resData = res?.data;
    return resData;
  }
);

export const fetchProductList = createAsyncThunk(
  "/product/list",
  async (formData) => {
    const response = await axiosInstance.post("/product/list", formData);
    return response.data;
  }
);

export const getProductDetail = createAsyncThunk(
  "/product/detail/:id",
  async (_id) => {
    const response = await axiosInstance.get(`/product/detail/${_id}`);
    return response.data;
  }
);
export const deleteProduct = createAsyncThunk(
  "/product/remove",
  async (formData) => {
    const response = await axiosInstance.post(`/product/remove/`, formData);
    return response.data;
  }
);
export const updateProductDetail = createAsyncThunk(
  "/product/update",
  async (formData) => {
    const response = await axiosInstance.post(`/product/update`, formData);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    status: "idle",
    message: null,
    error: null,
    createdProduct: {},
    productList: [],
    totalPages: "",
    productDetails: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      //* Create Product

      .addCase(createProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createProduct.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.createdProduct = payload.data;
        state.message = "Product created successfully";
        toast.success(payload?.message);
      })
      .addCase(createProduct.rejected, (state, { payload }) => {
        state.status = "failed";
        state.message = "Failed to create product";
        toast.error(payload?.message);
      })

      //*Fetch Product

      .addCase(fetchProductList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductList.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.productList = payload?.data;
        console.log(payload);
        state.totalPages = payload?.totalPages;
      })
      .addCase(fetchProductList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.error.message);
      })

      //*Product Detail

      .addCase(getProductDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductDetail.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.productDetails = payload.data;
        toast.success(payload?.message);
      })
      .addCase(getProductDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.payload.message);
      })

      //* Delete Product

      .addCase(deleteProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        toast.success(payload?.message);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.payload.message);
      })

      //* Update product

      .addCase(updateProductDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProductDetail.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        toast.success(payload?.message);
      })
      .addCase(updateProductDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.payload.message);
      });
  },
});

export default productSlice.reducer;
