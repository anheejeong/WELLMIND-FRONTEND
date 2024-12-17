import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import AuthPage from '@/pages/AuthPage'
import CommutePage from '@/pages/CommutePage'
import EmployeeDetailPage from '@/pages/EmployeeDetailPage'
import EmployeeInfoPage from '@/pages/EmployeeInfoPage'
import EmployeeReportPage from '@/pages/EmployeeReportPage'
import { InnerLayout } from '@/pages/Layout/InnerLayout'
import { MainLayout } from '@/pages/Layout/MainLayout'
import MainPage from '@/pages/MainPage'
import QRPage from '@/pages/QRPage'
import ReportPage from '@/pages/ReportPage'
import TransferDeptPage from '@/pages/TransferDeptPage'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/login',
        element: <AuthPage />,
      },
    ],
  },
  {
    element: <InnerLayout />,
    children: [
      {
        path: '/main',
        element: <MainPage />,
      },
      {
        path: '/qr',
        element: <QRPage />,
      },
      {
        path: '/commute',
        element: <CommutePage />,
      },
      {
        path: '/transfer-dept',
        element: <TransferDeptPage />,
      },
      {
        path: '/employee-info',
        element: <EmployeeInfoPage />,
      },
      {
        path: '/employee-reports',
        element: <EmployeeReportPage />,
      },
      {
        path: '/report',
        element: <ReportPage />,
      },
      {
        path: '/employee-info/detail',
        element: <EmployeeDetailPage />,
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
