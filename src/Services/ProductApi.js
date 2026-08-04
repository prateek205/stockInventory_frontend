import { api } from "./Api";

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({
        page = 1,
        limit = 10,
        search = "",
        sort = "",
        status = "",
      }) => ({
        url: "/product/getAllProducts",
        params: {
          page,
          limit,
          search,
          sort,
          status,
        },
      }),
      providesTags: ["Products"],
    }),

    getProductById: builder.query({
      query: (id) => `/product/getProduct/${id}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),

    postProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/product/createProduct",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Product", "Dashboard"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/deleteProduct/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Products", "Dashboard"],
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductByIdQuery,
  usePostProductMutation,
  useDeleteProductMutation,
} = productApi;
