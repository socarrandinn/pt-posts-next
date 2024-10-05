'use client'
import React from 'react'
import { ColumnDef, ColumnFiltersState, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable, VisibilityState } from '@tanstack/react-table'
import SearchFilter from './search-filter'
import TableContent from './table-content'
import TablePagination from './table-pagination'
import { useTranslations } from 'next-intl'


type TableProps = {
  columns: ColumnDef<any>[],
  data: any[],
  filterKey?: string
}
const Table = ({ columns, data, filterKey }: TableProps) => {
  const t = useTranslations()
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns: getTxColumns(columns, t),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,

    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  })


  return (
    <div className='w-full'>
      <SearchFilter table={table} filterKey={filterKey} />
      <TableContent table={table} columns={columns} />
      <TablePagination table={table} />
    </div>
  )
}

export default Table


const getTxColumns = (columns: ColumnDef<any>[], t: any) => {
  return columns?.map(column => ({ ...column, header: column.header ? t(column.header) : '' }))
}