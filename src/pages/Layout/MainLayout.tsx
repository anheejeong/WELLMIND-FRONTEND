import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

interface MainLayoutProps {
  children?: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="w-full w-full h-screen bg-components-graphBack">
      {children || <Outlet />}
    </div>
  )
}
