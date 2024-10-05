import { Table as TableUi, TableHead, TableHeader, TableRow, TableBody, TableCell } from '@/components/ui/table'
import { ColumnDef, flexRender, Table } from '@tanstack/react-table'
import { useTranslations } from 'next-intl'
import React from 'react'

const TableContent = ({ table, columns }: { table: Table<any>, columns: ColumnDef<any>[] }) => {
  const t = useTranslations()

  return (
    <div className="rounded-md border overflow-hidden">
      <TableUi >
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        t(header.column.columnDef.header),
                        header.getContext(),
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                {t('common.not-result')}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </TableUi>
    </div>
  )
}

export default TableContent