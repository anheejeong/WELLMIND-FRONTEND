import { useEffect, useState } from 'react'

import { ColumnDef } from '@tanstack/react-table'

import { NewBadge } from '@/components/NewBadge'
import ReportTable from '@/components/ReportTable'
import { MainReportItem, MainReportTable } from '@/types'

export default function RecentReport() {
  const [reports, setReports] = useState<MainReportTable>([])
  const [tableList, setTableList] = useState<MainReportTable>()

  useEffect(() => {
    setReports(dummydata)
  }, [])

  useEffect(() => {
    setTableList(reports)
  }, [reports])

  const columns: ColumnDef<MainReportItem>[] = [
    { accessorKey: 'id', enableHiding: true },
    { header: 'Date', accessorKey: 'date' },
    { header: 'Name', accessorKey: 'name' },
    { header: 'Type', accessorKey: 'type' },
    { header: 'Progress', accessorKey: 'progress' },
    {
      header: 'New',
      accessorKey: 'isNew',
      cell: ({ row }) => (row.original.isNew ? <NewBadge /> : null),
    },
  ]

  return (
    <div className="w-full">
      <div className="px-10">
        {reports && tableList && (
          <ReportTable reports={tableList} columns={columns} />
        )}
      </div>
    </div>
  )
}

const dummydata = [
  {
    id: '1',
    date: '2024-11-04',
    name: '안희정',
    type: '지각 빈발형',
    progress: 'Waiting',
    isNew: true,
  },
  {
    id: '2',
    date: '2024-11-02',
    name: '안희정',
    type: '지각 빈발형',
    progress: 'Waiting',
    isNew: true,
  },
  {
    id: '3',
    date: '2024-10-28',
    name: '안희정',
    type: '야근 빈발형',
    progress: 'Waiting',
    isNew: true,
  },
  {
    id: '4',
    date: '2024-10-25',
    name: '안희정',
    type: '출장 빈발형',
    progress: 'View',
    isNew: false,
  },
  {
    id: '5',
    date: '2024-10-19',
    name: '안희정',
    type: '야근 빈발형',
    progress: 'View',
    isNew: false,
  },
  {
    id: '6',
    date: '2024-10-10',
    name: '안희정',
    type: '정시 출퇴근형',
    progress: 'Exceed',
    isNew: false,
  },
]
