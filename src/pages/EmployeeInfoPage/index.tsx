import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import { ProfileCard } from '@/components/ProfileCard'

import './employeeInfo.css'

function PrevArrow({
  className,
  onClick,
}: {
  className?: string
  onClick?: () => void
}) {
  return (
    <BiChevronLeft
      className={`${className} w-12 h-12 text-text-gray hover:text-text-default absolute -left-10`}
      onClick={onClick}
    />
  )
}

function NextArrow({
  className,
  onClick,
}: {
  className?: string
  onClick?: () => void
}) {
  return (
    <BiChevronRight
      className={`${className} w-12 h-12 text-text-gray hover:text-text-default absolute -right-10`}
      onClick={onClick}
    />
  )
}

export default function EmployeeInfoPage() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <div className="w-full h-full pt-5 flex flex-col gap-7">
      <div className="text-2xl text-text-default font-bold">출퇴근 기록</div>
      <div className="w-full flex-1 flex flex-col gap-5 h-full overflow-y-auto">
        <div>
          <div className="text-xl text-text-default font-semibold">IT부서</div>
          <div className="flex items-center justify-center">
            <div className="flex w-11/12">
              <Slider
                {...settings}
                className=" w-full flex [&_.slick-track]:flex [&_.slick-track]:gap-0 [&_.slick-slide]:flex [&_.slick-slide]:justify-center [&_.slick-slide]:items-center [&_.slick-slide]:w-auto"
              >
                {dummyData.map((profile, index) => (
                  <ProfileCard
                    key={index}
                    name={profile.name}
                    photo={profile.photo}
                    email={profile.email}
                    buttonMod={profile.buttonMod}
                    onButtonClick={() => {}}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div>
          <div className="text-xl text-text-default font-semibold">경영팀</div>
          <div className="flex items-center justify-center">
            <div className="flex w-11/12">
              <Slider
                {...settings}
                className="w-full flex [&_.slick-track]:flex [&_.slick-track]:gap-1 [&_.slick-slide]:flex [&_.slick-slide]:justify-center [&_.slick-slide]:items-center [&_.slick-slide]:w-auto"
              >
                {dummyData.map((profile, index) => (
                  <ProfileCard
                    key={index}
                    name={profile.name}
                    photo={profile.photo}
                    email={profile.email}
                    buttonMod={profile.buttonMod}
                    onButtonClick={() => {}}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div>
          <div className="text-xl text-text-default font-semibold">경영팀</div>
          <div className="flex items-center justify-center">
            <div className="flex w-11/12">
              <Slider
                {...settings}
                className="w-full flex [&_.slick-track]:flex [&_.slick-track]:gap-1 [&_.slick-slide]:flex [&_.slick-slide]:justify-center [&_.slick-slide]:items-center [&_.slick-slide]:w-auto"
              >
                {dummyData.map((profile, index) => (
                  <ProfileCard
                    key={index}
                    name={profile.name}
                    photo={profile.photo}
                    email={profile.email}
                    buttonMod={profile.buttonMod}
                    onButtonClick={() => {}}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const dummyData = [
  {
    name: '안희정1',
    photo: 'https://ifh.cc/g/PVdXh3.jpg',
    email: 'eyrt6973@naver.com',
    buttonMod: 'MESSAGE' as const,
  },
  {
    name: '안희정2',
    photo: 'https://ifh.cc/g/PVdXh3.jpg',
    email: 'eyrt6973@naver.com',
    buttonMod: 'MESSAGE' as const,
  },
  {
    name: '안희정3',
    photo: 'https://ifh.cc/g/PVdXh3.jpg',
    email: 'eyrt6973@naver.com',
    buttonMod: 'MESSAGE' as const,
  },
  {
    name: '안희정4',
    photo: 'https://ifh.cc/g/PVdXh3.jpg',
    email: 'eyrt6973@naver.com',
    buttonMod: 'MESSAGE' as const,
  },
  {
    name: '안희정5',
    photo: 'https://ifh.cc/g/PVdXh3.jpg',
    email: 'eyrt6973@naver.com',
    buttonMod: 'MESSAGE' as const,
  },
  {
    name: '안희정6',
    photo: 'https://ifh.cc/g/PVdXh3.jpg',
    email: 'eyrt6973@naver.com',
    buttonMod: 'MESSAGE' as const,
  },
  {
    name: '안희정7',
    photo: 'https://ifh.cc/g/PVdXh3.jpg',
    email: 'eyrt6973@naver.com',
    buttonMod: 'MESSAGE' as const,
  },
  {
    name: '안희정8',
    photo: 'https://ifh.cc/g/PVdXh3.jpg',
    email: 'eyrt6973@naver.com',
    buttonMod: 'MESSAGE' as const,
  },
  {
    name: '안희정9',
    photo: 'https://ifh.cc/g/PVdXh3.jpg',
    email: 'eyrt6973@naver.com',
    buttonMod: 'MESSAGE' as const,
  },
  {
    name: '안희정10',
    photo: 'https://ifh.cc/g/PVdXh3.jpg',
    email: 'eyrt6973@naver.com',
    buttonMod: 'MESSAGE' as const,
  },
  {
    name: '안희정11',
    photo: 'https://ifh.cc/g/PVdXh3.jpg',
    email: 'eyrt6973@naver.com',
    buttonMod: 'MESSAGE' as const,
  },
  {
    name: '안희정12',
    photo: 'https://ifh.cc/g/PVdXh3.jpg',
    email: 'eyrt6973@naver.com',
    buttonMod: 'MESSAGE' as const,
  },
]
