import { ProfileCardItem } from '@/types'

export const ProfileCard = ({
  name,
  photo,
  email,
  buttonMod,
  onButtonClick,
}: ProfileCardItem) => {
  return (
    <div
      className="flex flex-col rounded-md justify-end m-2 overflow-hidden"
      style={{
        width: '180px',
        height: '160px',
        backgroundImage: `url(${photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex bg-black-600 bg-opacity-80 justify-between px-3 py-2">
        <div className="flex flex-col text-white w-full">
          <div className="flex justify-between">
            <div className="flex">
              <div className="text-xl font-semibold">{name}</div>
            </div>
            <div>
              <button
                onClick={onButtonClick}
                className="bg-white px-1.5 rounded-xl text-xs text-text-default"
              >
                {buttonMod}
              </button>
            </div>
          </div>
          <div className="text-sm">{email}</div>
        </div>
      </div>
    </div>
  )
}
