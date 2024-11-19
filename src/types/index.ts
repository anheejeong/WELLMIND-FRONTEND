import { IconType } from 'react-icons'

export type ProfileCardItem = {
  name: string
  photo: string
  email: string
  authType: 'N' | 'M'
  buttonMod: 'MESSAGE' | 'EDIT'
  onButtonClick: () => void
}

export type GraphItem = {
  time: string[]
  date: string[]
}

export type MenuButtonItem = {
  icon: IconType
  title: string
  description: string
}
