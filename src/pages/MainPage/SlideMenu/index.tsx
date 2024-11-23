import { useState } from 'react'

import CommuteGraph from '@/pages/MainPage/SlideMenu/CommuteGraph'
import RecentReport from '@/pages/MainPage/SlideMenu/RecentReport'

export default function SlideMenu() {
  const [activeBtn, setActiveBtn] = useState<number>(0)

  const buttons = [
    { content: '출결 현황' },
    { content: '최근 리포트' },
    { content: '개인 세부사항' },
  ]

  return (
    <div className="flex-1 border-t border-black relative">
      <div
        className="absolute w-40 h-1 bg-text-darkgray rounded-sm"
        style={{
          top: '-2px',
          transform: `translateX(${activeBtn * 10 + activeBtn * 1.25}rem)`,
          transition: 'transform 0.3s',
        }}
      />
      <div className="flex mt-2 gap-5 text-lg font-semibold">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`w-40 ${
              activeBtn === index ? 'text-text-default' : 'text-text-gray'
            }`}
            style={{ transition: 'color 0.2s ease-in-out' }}
            onClick={() => setActiveBtn(index)}
          >
            {button.content}
          </button>
        ))}
      </div>
      <div className="mt-6 px-12">
        {activeBtn === 0 ? (
          <CommuteGraph />
        ) : activeBtn === 1 ? (
          <RecentReport />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
