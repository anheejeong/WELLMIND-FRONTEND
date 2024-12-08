import { useState } from 'react'
import { BiShow } from 'react-icons/bi'

import { EmployeeReport } from '@/components/EmployeeReport'
import {
  ConfirmModal,
  ConfirmModalButton,
} from '@/components/Modal/ConfirmModal'

export default function EmployeeReportPage() {
  const [confirmIsOpen, setConfirmIsOpen] = useState(false)

  return (
    <div className="w-full h-full pt-5 flex flex-col gap-7">
      <div className="text-2xl text-text-default font-bold">
        직원 리포트 목록
      </div>
      <div>
        {dummyData.map((data) => (
          <EmployeeReport
            date={data.date}
            name={data.name}
            type={data.type}
            progress={data.progress}
            comment={data.comment}
            onClick={() => {
              setConfirmIsOpen(true)
            }}
          />
        ))}
      </div>
      <ConfirmModal
        isOpen={confirmIsOpen}
        onClose={() => setConfirmIsOpen(false)}
        icon={<BiShow />}
        title={`직원 리포트를 조회하시겠습니까?`}
        description={'직원 리포트 조회를 위해서는 권한 인증이 필요합니다.'}
        confirmButton={
          <ConfirmModalButton
            onClick={() => {
              setConfirmIsOpen(false)
            }}
          >
            확인
          </ConfirmModalButton>
        }
      />
    </div>
  )
}

const dummyData = [
  {
    date: '2024-10-25',
    name: '안희정',
    type: '지각 빈발형',
    progress: 'Waiting' as const,
    comment: true,
  },
  {
    date: '2024-10-25',
    name: '안희정',
    type: '야근 빈발형',
    progress: 'Done' as const,
    comment: false,
  },
]
