import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { Table as TableUi, TableHead, TableHeader, TableRow, TableBody, TableCell } from '@/components/ui/table'
import { ColumnDef } from '@tanstack/react-table'

const TableSkeleton = ({ columns }: { columns: ColumnDef<any>[] }) => {

  return (
    <div className='w-full flex flex-col gap-3'>
      <div className='w-full flex justify-between'>
        <Skeleton className='w-40 h-8 rounded-sm p-1' />
        <Skeleton className='w-20 h-8 rounded-sm p-1' />
      </div>

      <div className="w-full rounded-md border">
        <TableUi className='w-full pointer-events-none'>
          <TableHeader className='disabled'>
            <TableRow>
              {columns.map((header) => (
                <TableHead className='m-4' key={header.id}>
                  <Skeleton className='w-full h-8 rounded-sm' />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              Array(10).fill('').map((row) => (
                <TableRow key={row}>
                  {columns?.map((cell) => (
                    <TableCell className='m-4' key={cell.id}>
                      <Skeleton className='w-full h-8 rounded-sm' />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            }
          </TableBody>
        </TableUi>
      </div>

      <div className="w-full flex justify-between gap-8">
        <Skeleton className='w-48 h-8 rounded-sm' />
        <div className='flex gap-2 w-48'>
          <Skeleton className='w-full h-8 rounded-sm' />
          <Skeleton className='w-full h-8 rounded-sm' />
        </div>
      </div>
    </div>
  )
}

export default TableSkeleton