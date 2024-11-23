import MainMenu from '@/pages/MainPage/MainMenu'
import MyInfo from '@/pages/MainPage/MyInfo'
import SlideMenu from '@/pages/MainPage/SlideMenu'

export default function MainPage() {
  return (
    <div className="flex flex-col w-full">
      <MyInfo />
      <div className="flex gap-12">
        <MainMenu />
        <SlideMenu />
      </div>
    </div>
  )
}
