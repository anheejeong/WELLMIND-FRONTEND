import { useEffect, useState } from 'react'

import { ColumnDef } from '@tanstack/react-table'

import { Pagination } from '@/components/Pagination'
import CommuteTable from '@/components/ReportTable/CommuteTable'
import { TransferDeptItem, TransferDeptTable } from '@/types'

export default function TransferDeptPage() {
  const [reports, setReports] = useState<TransferDeptTable>([])
  const [tableList, setTableList] = useState<TransferDeptTable>()

  useEffect(() => {
    setReports(dummydata)
  }, [])

  useEffect(() => {
    setTableList(reports)
  }, [reports])

  const columns: ColumnDef<TransferDeptItem>[] = [
    { accessorKey: 'id', enableHiding: true },
    { header: '날짜', accessorKey: 'date' },
    { header: '유형', accessorKey: 'type' },
    { header: '이전 부서/직책', accessorKey: 'previous' },
    { header: '배치 부서/직책', accessorKey: 'update' },
    { header: '사유', accessorKey: 'reason' },
    { header: '상신자', accessorKey: 'recipient' },
  ]

  return (
    <div className="w-full py-5 flex flex-col gap-5">
      <div className="flex gap-10">
        <div className="text-2xl text-text-default font-bold">
          인사 이동 기록
        </div>
      </div>
      <div className="px-10">
        {reports && tableList && (
          <CommuteTable reports={tableList} columns={columns} />
        )}
      </div>
      <Pagination currentPage={1} totalPage={11} />
    </div>
  )
}

const dummydata = [
  {
    id: '1',
    date: '2019-05-02',
    type: '입사',
    previous: '',
    update: 'IT부서/사원',
    reason: '개발팀 입사',
    recipient: '박지현',
  },
  {
    id: '2',
    date: '2024-11-04',
    type: '부서 이동',
    previous: 'IT부서/사원',
    update: '앱개발팀/사원',
    reason: '프로젝트 필요',
    recipient: '박지현',
  },
]
