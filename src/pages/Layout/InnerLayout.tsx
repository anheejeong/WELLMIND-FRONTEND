import { ReactNode } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Outlet, useNavigate } from 'react-router-dom'

import logo from '@/assets/logo.svg'

interface InnerLayoutProps {
  children?: ReactNode
}

export const InnerLayout = ({ children }: InnerLayoutProps) => {
  const navigate = useNavigate()

  return (
    <div className="w-full w-full flex flex-col h-screen">
      <div className="w-full h-20 bg-white flex items-center px-20 justify-between">
        <img
          className="h-12 cursor-pointer"
          src={logo}
          alt="Jsolution"
          onClick={() => {
            navigate('/main')
          }}
        />
        <div className="flex items-center border border-gray-400 rounded-sm px-2">
          <BiSearch className="text-gray-400 mr-2" />
          <input
            className="flex-1 outline-none h-9 w-72"
            type="text"
            placeholder="직원 검색"
          />
        </div>
        <div className="flex md:gap-4 lg:gap-6 xl:gap-10 h-full">
          <button className="text-lg text-text-default">비상 연락망</button>
          <button
            className="text-lg text-text-default"
            onClick={() => {
              navigate('/report')
            }}
          >
            리포트
          </button>
          <button className="text-lg text-text-default">메세지</button>
          <div className="flex h-2/3 relative my-auto">
            <img
              className="h-full rounded-full"
              src="https://ifh.cc/g/PVdXh3.jpg"
              alt="profile"
            />
            <div className="absolute right-1 w-3 h-3 bg-green-600 rounded-full border border-black" />
          </div>
        </div>
      </div>
      <div className="flex-1 px-40 py-2 overflow-hidden">
        {children || <Outlet />}
      </div>
    </div>
  )
}
