import { BiTimeFive } from 'react-icons/bi'

import { Graph } from '@/components/Graph'
import { MenuButton } from '@/components/MenuButton'
import { ProfileCard } from '@/components/ProfileCard'

export default function MainPage() {
  return (
    <div>
      <ProfileCard
        name="안희정"
        photo="https://placehold.co/220x170"
        email="eyrt6973@naver.com"
        authType="M"
        buttonMod="EDIT"
        onButtonClick={() => {}}
      />
      <Graph
        time={['09:00', '09:00', '09:20', '08:50', '09:00', '09:02']}
        date={[
          '2024-11-19',
          '2024-11-20',
          '2024-11-21',
          '2024-11-22',
          '2024-11-23',
          '2024-11-24',
        ]}
      />
      <MenuButton
        icon={BiTimeFive}
        title="출퇴근 기록 조회"
        description="회사의 출퇴근 시간 기록과 지각 조퇴 결근 기록을 확인해보세요"
      />
    </div>
  )
}
