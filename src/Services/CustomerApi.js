import { api } from "./Api";

export const customerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCustomers: builder.query({
      query: ({
        page = 1,
        limit = 10,
        sort = "",
        search = "",
        status = "",
      }) => ({
        url: "/customer/customers",
        params: {
          page,
          limit,
          sort,
          search,
          status,
        },
      }),
      providesTags: ["Customer", "Dashboard"],
    }),

    getCustomerById: builder.query({
      query: (id) => ({
        url: `/customer/customer/${id}`,
      }),
      providesTags: (result, error, id) => [{ type: "Customer", id }],
    }),

    addCustomer: builder.mutation({
      query: (newCustomer) => ({
        url: "customer/createCustomer",
        method: "POST",
        body: newCustomer,
      }),
      invalidatesTags: ["Customer", "Dashboard"],
    }),

    updateCustomerById: builder.mutation({
      query: ({ id, ...customer }) => ({
        url: `customer/updateCustomer/${id}`,
        method: "PUT",
        body: customer,
      }),
      invalidatesTags: (result, error, id) => [{ type: "Customer", id }],
    }),

    deleteCustomerById: builder.mutation({
      query: (id) => ({
        url: `/customer/deleteCustomer/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Customer", id }],
    }),
  }),
});

export const {
  useGetCustomersQuery,
  useGetCustomerByIdQuery,
  useAddCustomerMutation,
  useUpdateCustomerByIdMutation,
  useDeleteCustomerByIdMutation,
} = customerApi;
