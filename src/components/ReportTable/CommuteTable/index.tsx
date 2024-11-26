import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { CommuteReportItem, CommuteReportTable } from '@/types'

type TableComponentProps = {
  reports: CommuteReportTable
  columns: ColumnDef<CommuteReportItem>[]
}

export default function CommuteTable({
  reports,
  columns,
}: TableComponentProps) {
  const table = useReactTable({
    data: reports,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="overflow-auto rounded-lg">
      <table className="table-auto w-full text-text-default text-lg border-separate border-spacing-y-2">
        <thead className="bg-background-light rounded-md pb-10">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="h-10">
              {headerGroup.headers
                .filter((header) => header.column.id !== 'id')
                .map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-1 font-semibold text-center"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
            </tr>
          ))}
        </thead>
        <tr className="bg-transparent"></tr>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            const isLate = row.original.isLate // 각 행의 isLate 상태 확인

            return (
              <tr
                key={row.id}
                className={`h-8 ${isLate ? 'bg-background-pink' : ''}`} // 조건부 배경색 추가
              >
                {row
                  .getVisibleCells()
                  .filter((cell) => cell.column.id !== 'id')
                  .map((cell) => {
                    let textColorClass = ''
                    if (cell.column.id === 'isLate') {
                      const progressValue = cell.getValue<boolean>()
                      textColorClass =
                        progressValue === true
                          ? 'text-default-red'
                          : 'text-default-green'
                    }

                    return (
                      <td
                        key={cell.id}
                        className={`py-1 ${textColorClass} text-center`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    )
                  })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
