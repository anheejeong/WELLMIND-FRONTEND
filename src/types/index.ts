export type ProfileCardItem = {
  name: string
  photo: string
  email: string
  authType: 'N' | 'M'
  buttonMod: 'MESSAGE' | 'EDIT'
  onButtonClick: () => void
}
