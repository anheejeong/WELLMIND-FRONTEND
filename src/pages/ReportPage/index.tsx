import { Link } from 'react-router-dom'

import { useGetMyReport } from '@/api/services/reports/profileReport.api'
import { ReportBox } from '@/components/ReportBox'
import LoadingPage from '@/pages/LoadingPage'

export default function ReportPage() {
  const { data: Reports, isLoading, isPending, error } = useGetMyReport()
  const icons = ['⏰', '🔥', '🚗', '💼', '🏃🏻‍♂️']

  if (isLoading || isPending) return <LoadingPage />
  if (error) throw Error()

  return (
    <div className="w-full py-5 flex flex-col gap-5">
      <div className="flex flex-col gap-10">
        <div className="text-2xl text-text-default font-bold">
          웰니스 리포트
        </div>
        <div
          className="grid grid-cols-3 gap-6 mx-14 overflow-y-auto"
          style={{ height: '530px' }}
        >
          {Reports &&
            Reports.map((report, index) => (
              <Link to={`/report/${report.reportId}`}>
                <ReportBox
                  key={report.reportId}
                  icon={icons[index % icons.length]}
                  reportType={report.reportType}
                  employeeId={report.reportedEmployeeId}
                  employeeName={report.reportedEmployeeName}
                  date={report.registeredDate}
                  description={`${report.reportType}에 관한 레포트입니다.\nAI 웰니스 리포트 및 담당자의 코멘트를 확인해보세요!`}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
