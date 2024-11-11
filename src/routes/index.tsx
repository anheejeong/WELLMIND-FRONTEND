import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import AuthPage from '@/pages/AuthPage'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <AuthPage />,
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
