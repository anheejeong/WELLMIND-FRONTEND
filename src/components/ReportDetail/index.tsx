import { useGetMyReportDetail } from '@/api/services/reports/reportDetail.api'
import { DetailReportBox } from '@/components/ReportDetail/DetailReportBox'
import LoadingPage from '@/pages/LoadingPage'

interface ConfirmModalProps {
  isOpen: boolean
  onClose: () => void
  reportId: number
}

export const ReportDetail = ({
  isOpen,
  onClose,
  reportId,
}: ConfirmModalProps) => {
  const {
    data: detailReport,
    isLoading,
    isPending,
    error,
  } = useGetMyReportDetail({ reportId })

  if (isLoading || isPending) return <LoadingPage />
  if (error) throw Error()

  if (!detailReport) return '레포트가 없습니다.'

  return (
    <DetailReportBox isOpen={isOpen} onClose={onClose} report={detailReport} />
  )
}
