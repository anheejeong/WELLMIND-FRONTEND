import { useSuspenseQuery } from '@tanstack/react-query'

import { authorizationInstance } from '@/api/instance'
import { ProfileReportResponseType } from '@/types'

const getProfileReport = async (recentCount: number) => {
  const response = await authorizationInstance.get<ProfileReportResponseType>(
    `/api/report/recent`,
    {
      params: { recentCount },
    }
  )

  console.log(response.data.data)

  return response.data.data
}

export const useGetProfileReport = (recentCount: number) => {
  return useSuspenseQuery({
    queryKey: ['profileReport', recentCount],
    queryFn: () => getProfileReport(recentCount),
  })
}
