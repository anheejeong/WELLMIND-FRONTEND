import { QueryClient } from '@tanstack/react-query'
import axios, { AxiosRequestConfig } from 'axios'

import {
  // authErrorInterceptor,
  authLoginErrorInterceptor,
} from '@/api/instance/authErrorInterceptor'

// import { useAppSelector } from '@/store/hooks/useAppSelector'

const BASE_URL = import.meta.env.VITE_BASE_URL

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 1000 * 60,
      throwOnError: true,
    },
    mutations: {
      throwOnError: true,
    },
  },
})

const initInstance = (config: AxiosRequestConfig) => {
  const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    ...config,
    headers: {
      Accept: 'application/json',
      ...config.headers,
    },
  })

  return instance
}

export const fetchInstance = initInstance({})

fetchInstance.interceptors.response.use(
  (response) => response,
  authLoginErrorInterceptor
)

// 리팩토링 시 사용
// export const authorizationInstance = initInstance({})

// authorizationInstance.interceptors.request.use(
//   (request) => {
//     const authToken = useAppSelector((state) => state.authToken.value)

//     if (authToken) {
//       request.headers.Authorization = `Bearer ${authToken}`
//     }

//     return request
//   },
//   (error) => error
// )

// authorizationInstance.interceptors.response.use(
//   (response) => response,
//   authErrorInterceptor
// )
