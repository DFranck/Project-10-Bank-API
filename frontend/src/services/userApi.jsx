import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/v1" }),

  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (user) => ({
        url: "/user/login",
        method: "POST",
        body: {
          email: user.email,
          password: user.password,
        },
      }),
    }),
    getUserProfile: builder.query({
      query: (token) => ({
        url: "/user/profile",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useLoginUserMutation, useGetUserProfileQuery } = userApi;
