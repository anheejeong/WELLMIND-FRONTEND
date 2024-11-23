import { MenuButtonItem } from '@/types'

export const MenuButton = ({
  content,
  color,
  onButtonClick,
}: MenuButtonItem) => {
  return (
    <button
      className={`text-left h-8 hover:bg-background-light focus:bg-background-default rounded-md px-1 ${
        color === 'light' ? 'text-primary-400' : 'text-primary-600'
      }`}
      onClick={onButtonClick}
    >
      {content}
    </button>
  )
}
