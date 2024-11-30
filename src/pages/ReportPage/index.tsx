import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate } from 'react-router-dom'

import { NewBadge } from '@/components/NewBadge'

import './date.css'

export default function ReportPage() {
  const navigate = useNavigate()
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

  const highlightDates = [
    {
      'react-datepicker__day--highlighted-custom': dummyDates,
    },
  ]

  return (
    <div className="w-full py-5 flex flex-col gap-5">
      <div className="flex flex-col gap-10">
        <div className="text-2xl text-text-default font-bold">
          웰니스 리포트
        </div>
        <div className="flex justify-center">
          <DatePicker
            inline
            className="datePicker"
            dateFormat="yyyy.MM.dd" // 날짜 형태
            minDate={new Date('2000-01-01')} // 선택 가능 최소 날짜
            maxDate={new Date()} // 선택 가능 최대 날짜
            selected={selectedDate} // 선택된 날짜
            onChange={(date) => setSelectedDate(date)} // 날짜 변경 핸들러
            highlightDates={highlightDates} // 강조 날짜
            renderDayContents={(day, date) => {
              // 달력에 날짜를 렌더링하며 특정 날짜에 빨간 점 표시
              const isEventDate = dummyDates.some(
                (dummyDate) =>
                  date &&
                  dummyDate.getFullYear() === date.getFullYear() &&
                  dummyDate.getMonth() === date.getMonth() &&
                  dummyDate.getDate() === date.getDate()
              )

              return (
                <div className="relative">
                  {day}
                  {isEventDate && (
                    <div
                      className="absolute bottom-0 w-1 h-1 bg-default-lightRed rounded-full"
                      style={{ left: '50%', transform: 'translateX(-50%)' }}
                    />
                  )}
                </div>
              )
            }}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="w-80 flex flex-col items-center text-text-default border border-primary-300 rounded-md py-1 hover:bg-background-default"
            onClick={() => {
              navigate('/report/detail')
            }}
          >
            <div>
              2024-11-30 안희정 <b>지각 빈발형</b> 리포트
            </div>
            <div className="flex items-center gap-3">
              <div>
                상태: <label className="text-default-green">Waiting</label>
              </div>
              <NewBadge />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

const dummyDates = [
  new Date('2024-11-01'),
  new Date('2024-11-15'),
  new Date('2024-11-25'),
]
