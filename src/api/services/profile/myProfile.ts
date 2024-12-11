import { useSuspenseQuery } from '@tanstack/react-query'

import { authorizationInstance } from '@/api/instance'

const getMyProfile = async () => {
  const response = await authorizationInstance.get(
    '/api/auth/find-by-id/profile'
  )

  console.log(response)

  return response.data
}

export const useGetMyProfile = () => {
  return useSuspenseQuery({
    queryKey: ['myProfile'],
    queryFn: () => getMyProfile(),
  })
}
