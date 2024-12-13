import RecentGraph from '@/components/RecentGraph'

export default function RecentReport() {
  return (
    <div className="w-full">
      <RecentGraph data={dummyData} />
    </div>
  )
}

const dummyData = [
  { text: '정상 출퇴근형' },
  { text: '지각 빈발형' },
  { text: '야근 빈발형' },
  { text: '정상 출퇴근형' },
  // { text: '출장 빈발형' },
  // { text: '조퇴 빈발형' },
  // { text: '외출 빈발형' },
]
