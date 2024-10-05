import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { ChevronDownIcon, Cross1Icon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'
import { useTranslations } from 'next-intl'
import React from 'react'

type SearchFilterProps = {
  table: Table<any>,
  filterKey?: string
}
const SearchFilter = ({ table, filterKey }: SearchFilterProps) => {
  const t = useTranslations('common')
  return (
    <div className="flex items-center py-4">
      <div className='flex flex-row gap-2 max-w-3xl w-full'>
        <Input
          placeholder={t('search')}
          value={(table.getColumn(filterKey || "title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"

        />
        <Button variant={'outline'} className='border p-2' onClick={() => table.resetColumnFilters()}>
          <Cross1Icon className="h-4 w-4" />
        </Button>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ml-auto">
            {t('columns')} <ChevronDownIcon className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
              const title = (column?.columnDef?.header || column.id) as string
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) =>
                    column.toggleVisibility(!!value)
                  }
                >

                  {title}
                </DropdownMenuCheckboxItem>
              )
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default SearchFilter