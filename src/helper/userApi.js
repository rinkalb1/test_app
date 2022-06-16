
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/users" }),
  tagTypes: ["Task"],
  endpoints: (build) => ({
    fetchTasks: build.query({ query: () => "", providesTags: ["Task"] }),
    createTask: build.mutation({
      query: (data) => ({
        url: "",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Task"]
    }),

  })
});

export const {
  useFetchTasksQuery,
  useCreateTaskMutation,
} = api;
