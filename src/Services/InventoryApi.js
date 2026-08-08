import { api } from "./Api";

export const InventoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getInventory: builder.query({
      query: ({
        page = 1,
        limit = 10,
        sort = "newest",
        search = "",
        status = "",
      }) => ({
        url: "/inventory/getAllInventory",
        params: {
          page,
          limit,
          sort,
          search,
          status,
        },
      }),
      provideTags: ["Product", "Dashboard"],
    }),
  }),
});

export const { useGetInventoryQuery } = InventoryApi;
