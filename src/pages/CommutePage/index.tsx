import { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'

import { ColumnDef } from '@tanstack/react-table'

import { Pagination } from '@/components/Pagination'
import CommuteTable from '@/components/ReportTable/CommuteTable'
import { CommuteReportItem, CommuteReportTable } from '@/types'

export default function CommutePage() {
  const [reports, setReports] = useState<CommuteReportTable>([])
  const [tableList, setTableList] = useState<CommuteReportTable>()

  useEffect(() => {
    setReports(dummydata)
  }, [])

  useEffect(() => {
    setTableList(reports)
  }, [reports])

  const columns: ColumnDef<CommuteReportItem>[] = [
    { accessorKey: 'id', enableHiding: true },
    { header: '날짜', accessorKey: 'date' },
    { header: '근무 형태', accessorKey: 'type' },
    { header: '출근 시간', accessorKey: 'goTime' },
    { header: '퇴근 시간', accessorKey: 'leaveTime' },
    {
      header: '지각 여부',
      accessorKey: 'isLate',
      cell: (info) => (info.getValue<boolean>() ? 'O' : 'X'),
    },
  ]

  return (
    <div className="w-full py-5 flex flex-col gap-5">
      <div className="flex gap-10">
        <div className="text-2xl text-text-default font-bold">출퇴근 기록</div>
        <div className="flex gap-2 items-center">
          <input
            type="date"
            className="border rounded-md px-3 border-text-gray"
          />
          <div>~</div>
          <input
            type="date"
            className="border rounded-md px-3 border-text-gray"
          />
          <button className="bg-background-purple text-text-white pl-5 pr-6 rounded-md ml-2 py-0.5 hover:bg-primary-700 focus:bg-primary-900">
            <div className="flex gap-1 items-center">
              <BiSearch className="w-5 h-5" />
              <div>조회</div>
            </div>
          </button>
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
    date: '2024-11-04',
    type: '일반근무',
    goTime: '08:52',
    leaveTime: '18:02',
    isLate: false,
  },
  {
    id: '2',
    date: '2024-11-04',
    type: '일반근무',
    goTime: '09:02',
    leaveTime: '18:02',
    isLate: true,
  },
  {
    id: '3',
    date: '2024-11-04',
    type: '일반근무',
    goTime: '08:52',
    leaveTime: '18:02',
    isLate: false,
  },
  {
    id: '4',
    date: '2024-11-04',
    type: '일반근무',
    goTime: '08:52',
    leaveTime: '18:02',
    isLate: false,
  },
  {
    id: '5',
    date: '2024-11-04',
    type: '일반근무',
    goTime: '08:52',
    leaveTime: '18:02',
    isLate: false,
  },
  {
    id: '6',
    date: '2024-11-04',
    type: '일반근무',
    goTime: '09:31',
    leaveTime: '18:02',
    isLate: true,
  },
  {
    id: '7',
    date: '2024-11-04',
    type: '일반근무',
    goTime: '08:52',
    leaveTime: '18:02',
    isLate: false,
  },
  {
    id: '8',
    date: '2024-11-04',
    type: '일반근무',
    goTime: '08:52',
    leaveTime: '18:02',
    isLate: false,
  },
  {
    id: '9',
    date: '2024-11-04',
    type: '일반근무',
    goTime: '09:10',
    leaveTime: '18:02',
    isLate: true,
  },
]
