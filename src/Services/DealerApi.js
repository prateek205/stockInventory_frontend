import { api } from "./Api";

export const dealerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDealers: builder.query({
      query: ({
        page = 1,
        limit = 10,
        search = "",
        sort = "",
        status = "",
      }) => ({
        url: "/dealer/allDealers",
        params: {
          page,
          limit,
          search,
          sort,
          status,
        },
      }),
      providesTags: ["Dealer", "Dashboard"],
    }),

    getDealerById: builder.query({
      query: (id) => `/dealer/dealer/${id}`,
      providesTags: (result, error, id) => [{ type: "Dealer", id }],
    }),

    addDealer: builder.mutation({
      query: (newDealer) => ({
        url: "/dealer/createDealer",
        method: "POST",
        body: newDealer,
      }),
      invalidatesTags: ["Dealer", "Dashboard"],
    }),

    updateDealerById: builder.mutation({
      query: ({ id, ...dealer }) => ({
        url: `/dealer/updateDealer/${id}`,
        method: "PUT",
        body: dealer,
      }),
      invalidatesTags: (result, error, id) => [{ type: "Dealer", id }],
    }),

    deleteDealerById: builder.mutation({
      query: (id) => ({
        url: `/dealer/deleteDealer/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: (result, error, id) => [{ type: "Dealer", id }],
    }),
  }),
});

export const {
  useGetDealersQuery,
  useGetDealerByIdQuery,
  useAddDealerMutation,
  useUpdateDealerByIdMutation,
  useDeleteDealerByIdMutation,
} = dealerApi;
