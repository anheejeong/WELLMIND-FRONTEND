import { useSuspenseQuery } from '@tanstack/react-query'

import { authorizationInstance } from '@/api/instance'

export type QRCodeRequest = {
  longitude: string
  latitude: string
}

const postQRCode = async ({ longitude, latitude }: QRCodeRequest) => {
  console.log(longitude, latitude)

  const response = await authorizationInstance.post(
    `/api/qr/create?longitude=${longitude}&latitude=${latitude}`
  )

  //   const response = await authorizationInstance.post('/api/qr/create', {
  //     longitude,
  //     latitude,
  //   })

  console.log(response)

  return response.data.data
}

export const usePostQRCode = (longitude: string, latitude: string) => {
  return useSuspenseQuery({
    queryKey: ['myQRCode', longitude, latitude],
    queryFn: () => postQRCode({ longitude, latitude }),
  })
}
