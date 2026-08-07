import { api } from "./Api";

export const loginApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addLogin: builder.mutation({
      query: (user) => ({
        url: "/admin/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Auth"],
    }),

    addLogout: builder.mutation({
      query: () => ({
        url: "/admin/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),

    getProfile: builder.query({
      query: () => ({
        url: "/admin/profile",
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),
  }),
});

export const { useAddLoginMutation, useAddLogoutMutation, useGetProfileQuery } =
  loginApi;
