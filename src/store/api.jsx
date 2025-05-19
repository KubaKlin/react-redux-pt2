import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.tvmaze.com/' }),
  tagTypes: ['Shows'],
  endpoints: (builder) => ({
    getShows: builder.query({
      query: () => '/shows',
      providesTags: ['Shows'],
    }),
    getSingleShow: builder.query({
      query: (id) => `shows/${id}`,
      providesTags: ['Shows'],
    }),
    getSingleShowEpisodes: builder.query({
      query: (id) => `shows/${id}/episodes`,
      providesTags: ['Shows'],
    })
  }),
});

export const { useGetShowsQuery, useGetSingleShowQuery, useGetSingleShowEpisodesQuery } = api;
