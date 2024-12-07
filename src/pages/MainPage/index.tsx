import { useEffect, useState } from 'react'

import LoadingPage from '@/pages/LoadingPage'

import MainMenu from './MainMenu'
import MyInfo from './MyInfo'
import SlideMenu from './SlideMenu'

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="flex flex-col w-full">
          <MyInfo />
          <div className="flex gap-12">
            <MainMenu />
            <SlideMenu />
          </div>
        </div>
      )}
    </>
  )
}
