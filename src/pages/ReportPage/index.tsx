import { useNavigate } from 'react-router-dom'

import { ReportBox } from '@/components/ReportBox'

export default function ReportPage() {
  const navigate = useNavigate()

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
          <ReportBox
            icon="⏰"
            reportType="지각, 야근 빈발형"
            employeeId="EMP997"
            employeeName="권예린"
            date="2024-12-13"
            description={`지각, 야근 빈발형에 관한 레포트입니다.\nAI 웰니스 리포트 및 담당자의 코멘트를 확인해보세요!`}
          />
          <ReportBox
            icon="🔥"
            reportType="야근 빈발형"
            employeeId="EMP997"
            employeeName="권예린"
            date="2024-12-13"
            description={`야근 빈발형에 관한 레포트입니다.\nAI 웰니스 리포트 및 담당자의 코멘트를 확인해보세요!`}
          />
          <ReportBox
            icon="🚗"
            reportType="출장 빈발형"
            employeeId="EMP997"
            employeeName="권예린"
            date="2024-12-13"
            description={`출장 빈발형에 관한 레포트입니다.\nAI 웰니스 리포트 및 담당자의 코멘트를 확인해보세요!`}
          />
          <ReportBox
            icon="🏃🏻‍♂️"
            reportType="조퇴 빈발형"
            employeeId="EMP997"
            employeeName="권예린"
            date="2024-12-13"
            description={`조퇴 빈발형에 관한 레포트입니다.\nAI 웰니스 리포트 및 담당자의 코멘트를 확인해보세요!`}
          />
        </div>
      </div>
    </div>
  )
}
