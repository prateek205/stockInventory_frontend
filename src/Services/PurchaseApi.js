import { api } from "./Api";

export const purchaseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPurchases: builder.query({
      query: ({
        page = 1,
        limit = 10,
        sort = "",
        search = "",
        status = "",
      }) => ({
        url: "/purchase/getPurchases",
        params: {
          page,
          limit,
          sort,
          search,
          status,
        },
      }),

      providesTags: ["Purchase", "Dashboard"],
    }),

    getPurchaseById: builder.query({
      query: (id) => ({
        url: `/purchase/getPurchase/${id}`,
      }),

      providesTags: (result, error, id) => [{ type: "Purchase", id }],
    }),

    addPurchase: builder.mutation({
      query: (newPurchase) => ({
        url: "/purchase/createPurchase",
        method: "POST",
        body: newPurchase,
      }),
      invalidatesTags: ["Purchase", "Dashboard", "Product", "Sales"],
    }),

    updatePurchaseById: builder.mutation({
      query: ({ id, ...Purchase }) => ({
        url: `/purchase/updatePurchase/${id}`,
        method: "PUT",
        body: Purchase,
      }),
      invalidatesTags: (result, error, id) => [{ type: "Purchase", id }],
    }),

    deletePurchaseById: builder.mutation({
      query: (id) => ({
        url: `/purchase/deletePurchase/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (id) => [{ type: "purchase", id }],
    }),
  }),
});

export const {
  useGetPurchasesQuery,
  useGetPurchaseByIdQuery,
  useAddPurchaseMutation,
  useUpdatePurchaseByIdMutation,
  useDeletePurchaseByIdMutation,
} = purchaseApi;
