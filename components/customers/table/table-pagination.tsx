import { Button } from '@/components/ui/button'
import { Table } from '@tanstack/react-table'
import { useTranslations } from 'next-intl'
import React from 'react'

const TablePagination = ({ table }: { table: Table<any> }) => {
  const t = useTranslations('common')
  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <div className="flex-1 text-sm text-muted-foreground">
        <div className='flex flex-col md:flex-row md:gap-2'>
          <span>{t('total')}: {table.getRowCount()}</span>
          <span className='hidden md:inline'>/</span>
          <span>{t('page')}: {table.getState().pagination.pageIndex + 1} {t('of')} {table.getPageCount()}</span>
        </div>
      </div>
      <div className="space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {t('previous')}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {t('next')}
        </Button>
      </div>
    </div>
  )
}

export default TablePagination