import { fetchInstance } from '@/api/instance'

type loginRequest = {
  employeeId: string
  password: string
}
export const postLogin = async ({ employeeId, password }: loginRequest) => {
  const response = await fetchInstance.post('/api/public/login', {
    employeeId,
    password,
  })
  return response.data
}
