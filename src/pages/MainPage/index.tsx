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
      />
    </div>
  )
}
