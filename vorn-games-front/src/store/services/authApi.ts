import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type User = {
  id: string
  steamId: string
  username: string
  avatarUrl: string
  balance: number
}

const baseUrl = import.meta.env.DEV ? '' : (import.meta.env.VITE_API_URL ?? '')

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include',
  }),
  tagTypes: ['User'],
  endpoints: (build) => ({
    getMe: build.query<User | null, void>({
      async queryFn(_arg, _api, _extra, fetchWithBQ) {
        const result = await fetchWithBQ('/api/auth/me')

        if (result.error) {
          if (result.error.status === 401) {
            return { data: null }
          }

          return { error: result.error }
        }

        return { data: result.data as User }
      },
      providesTags: ['User'],
    }),
    logout: build.mutation<{ ok: boolean }, void>({
      query: () => ({
        url: '/api/auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

export const { useGetMeQuery, useLogoutMutation } = authApi

export const getSteamLoginUrl = () => {
  const apiBase = import.meta.env.DEV ? '' : (import.meta.env.VITE_API_URL ?? '')
  return `${apiBase}/api/auth/steam`
}
