import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { MainReportItem, MainReportTable } from '@/types'

type TableComponentProps = {
  reports: MainReportTable
  columns: ColumnDef<MainReportItem>[]
}

export default function ReportTable({ reports, columns }: TableComponentProps) {
  const table = useReactTable({
    data: reports,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="overflow-auto rounded-lg">
      <table className="table-auto w-full text-text-default text-lg">
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="h-11">
              {row
                .getVisibleCells()
                .filter((cell) => cell.column.id !== 'id')
                .map((cell) => {
                  let textColorClass = ''
                  if (cell.column.id === 'progress') {
                    const progressValue = cell.getValue<string>()
                    textColorClass =
                      progressValue === 'Waiting'
                        ? 'text-primary-500'
                        : progressValue === 'View'
                          ? 'text-default-green'
                          : 'text-default-red'
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
          ))}
        </tbody>
      </table>
    </div>
  )
}
