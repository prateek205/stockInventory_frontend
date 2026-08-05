import { api } from "./Api";

export const salesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSales: builder.query({
      query: () => ({
        url: "/sales/getSales",
      }),
      providesTags: ["Sales","Dashboard"],
    }),

    getSalesById: builder.query({
      query: (id) => ({
        url: `/sales/getSale/${id}`,
      }),
      providesTags: (result, error, id) => [{ type: "Sales", id }],
    }),

    addSales: builder.mutation({
      query: (newSale) => ({
        url: "/sales/createSales",
        method: "POST",
        body: "newSale",
      }),
      invalidatesTags: ["Sales", "Dashboard"],
    }),

    updateSaleById: builder.mutation({
      query: ({ id, ...sale }) => ({
        url: `/sales/updateSale/${id}`,
        method: "PUT",
        body: "sale",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Sales", id }],
    }),

    deleteSalesById: builder.mutation({
      query: (id) => ({
        url: `/sales/deleteSale/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Sales", id }],
    }),
  }),
});

export const {
  useGetSalesQuery,
  useGetSalesByIdQuery,
  usePostSalesMutation,
  useUpdateSalesByIdMutation,
  useDeleteSalesByIdMutation,
} = salesApi;
