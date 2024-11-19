import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import AuthPage from '@/pages/AuthPage'
import { MainLayout } from '@/pages/Layout/MainLayout'
import MainPage from '@/pages/MainPage'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/login',
        element: <AuthPage />,
      },
      {
        path: '/main',
        element: <MainPage />,
      },
    ],
  },
  {
    path: '*', // 에러 페이지 구현 후 바꿔야 함
    element: <AuthPage />,
  },
])

export const Routes = () => {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  )
}
