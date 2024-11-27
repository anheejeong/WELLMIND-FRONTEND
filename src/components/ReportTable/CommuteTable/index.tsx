import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

type TableComponentProps<T extends object> = {
  reports: T[]
  columns: ColumnDef<T>[]
}

export default function CommuteTabl<T extends object>({
  reports,
  columns,
}: TableComponentProps<T>) {
  const table = useReactTable<T>({
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
            const isLate =
              'isLate' in row.original ? row.original.isLate : undefined

            return (
              <tr
                key={row.id}
                className={`h-8 ${isLate ? 'bg-background-pink' : ''}`}
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
