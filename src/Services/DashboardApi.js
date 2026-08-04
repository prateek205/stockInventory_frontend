import { api } from "./Api";

export const dashboardApi = api.injectEndpoints({
  endpoints: (builder) => {
    getDashboard: builder.query({
      query: () => "/dashboard/dashboard_data",
      providesTags: ["Dashboard"],
    });
  },
});

export const { useGetDashboardQuery } = dashboardApi;
