import { MenuButtonItem } from '@/types'

export const MenuButton = ({
  icon: Icon,
  title,
  description,
}: MenuButtonItem) => {
  return (
    <button className="px-2 py-3 rounded-xl bg-button-lightBlue hover:bg-button-hoverBlue shadow-md">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="text-text-default">
            <Icon className="w-8 h-8" />
          </div>
          <div className="text-xl font-semibold text-text-default">{title}</div>
        </div>
        <div className=" px-10 text-sm text-text-secondary">{description}</div>
      </div>
    </button>
  )
}
