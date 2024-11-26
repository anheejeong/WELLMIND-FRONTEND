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
  content: string
  color: 'light' | 'dark'
  onButtonClick: () => void
}

export type MainReportItem = {
  id: string
  date: string
  name: string
  type: string
  progress: string
  isNew: boolean
}

export type MainReportTable = MainReportItem[]

export type CommuteReportItem = {
  id: string
  date: string
  type: string
  goTime: string
  leaveTime: string
  isLate: boolean
}

export type CommuteReportTable = CommuteReportItem[]
