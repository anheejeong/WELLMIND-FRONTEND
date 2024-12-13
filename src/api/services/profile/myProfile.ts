import { useSuspenseQuery } from '@tanstack/react-query'

import { authorizationInstance } from '@/api/instance'
import { MyProfileResponse } from '@/types'

const getMyProfile = async () => {
  const response = await authorizationInstance.get<MyProfileResponse>(
    '/api/auth/find-by-id/profile'
  )

  return response.data.data
}

export const useGetMyProfile = () => {
  return useSuspenseQuery({
    queryKey: ['myProfile'],
    queryFn: () => getMyProfile(),
  })
}
