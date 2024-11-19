import { Graph } from '@/components/Graph'
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
    </div>
  )
}
