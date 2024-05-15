import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL + "/api/v1",
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `/users`,
            providesTags: ["USERS"],
        }),
        addNewUser: builder.mutation({
            query: (users) => ({
                url: "/users",
                method: "POST",
                body: users,
            }),
            invalidatesTags: (result, error, arg) => [
                { type: "USERS", id: arg._id },
            ],
        }),
        getTickets: builder.query({
            query: () => `/tickets`,
            providesTags: ["TICKETS"],
        }),
        getTicket: builder.query({
            query: (id) => `/tickets/${id}`,
            providesTags: ["TICKETS"],
        }),
        addNewTicket: builder.mutation({
            query: (ticket) => ({
                url: "/tickets",
                method: "POST",
                body: ticket,
            }),
            invalidatesTags: (result, error, arg) => [
                { type: "TICKETS", id: arg._id },
            ],
        }),
    }),
});

export const {
    useGetUsersQuery,
    useAddNewUserMutation,
    useGetTicketsQuery,
    useLazyGetTicketQuery,
    useAddNewTicketMutation,
} = api;
