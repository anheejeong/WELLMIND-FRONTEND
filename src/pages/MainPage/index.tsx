import { useGetMyProfile } from '@/api/services/profile/myProfile'
import LoadingPage from '@/pages/LoadingPage'

import MainMenu from './MainMenu'
import MyInfo from './MyInfo'
import SlideMenu from './SlideMenu'

export default function MainPage() {
  const { data: Profile, isPending, isLoading, error } = useGetMyProfile()

  if (isPending || isLoading) return <LoadingPage />
  if (error) throw Error

  console.log(Profile)

  return (
    <div className="flex flex-col w-full">
      <MyInfo profile={Profile} />
      <div className="flex gap-12">
        <MainMenu />
        <SlideMenu />
      </div>
    </div>
  )
}
