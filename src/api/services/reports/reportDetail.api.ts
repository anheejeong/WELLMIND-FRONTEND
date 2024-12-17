import { useSuspenseQuery } from '@tanstack/react-query'

import { authorizationInstance } from '@/api/instance'
import { MyReportDetailItem } from '@/types'

const getMyReportDetail = async ({
  reportId,
  employeeId,
}: {
  reportId: number
  employeeId?: string
}) => {
  const response = await authorizationInstance.get<MyReportDetailItem>(
    `/api/report/view/${reportId}`,
    {
      params: { employeeId },
    }
  )

  return response.data
}

export const useGetMyReportDetail = ({
  reportId,
  employeeId,
}: {
  reportId: number
  employeeId?: string
}) => {
  return useSuspenseQuery({
    queryKey: ['myReportDetail'],
    queryFn: () => getMyReportDetail({ reportId, employeeId }),
  })
}
