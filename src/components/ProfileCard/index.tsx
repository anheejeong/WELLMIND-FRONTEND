import { ProfileCardItem } from '@/types'

export const ProfileCard = ({
  name,
  photo,
  email,
  authType,
  buttonMod,
  onButtonClick,
}: ProfileCardItem) => {
  const authContent = authType === 'M' ? 'Manager' : 'Employee'

  return (
    <div
      className="flex flex-col rounded-md justify-end m-2 overflow-hidden"
      style={{
        width: '220px',
        height: '170px',
        backgroundImage: `url(${photo})`,
      }}
    >
      <div className="flex bg-components-profileCard bg-opacity-85 justify-between px-3 py-2">
        <div className="flex flex-col text-white">
          <div className="flex align-end">
            <div className="text-xl font-semibold">{name}</div>
            <div className="text-xs">{authContent}</div>
          </div>
          <div className="text-sm">{email}</div>
        </div>
        <div>
          <button
            onClick={onButtonClick}
            className="bg-white px-2 rounded-xl text-sm"
          >
            {buttonMod}
          </button>
        </div>
      </div>
    </div>
  )
}
