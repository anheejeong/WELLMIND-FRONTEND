import { EmployeeReport } from '@/components/EmployeeReport'

export default function EmployeeReportPage() {
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
          />
        ))}
      </div>
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
