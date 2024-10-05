import TableSkeleton from '@/components/customers/table/table-skeleton'
import React from 'react'

const loading = () => {
  return (
    <TableSkeleton columns={Array(3).fill('')} />
  )
}

export default loading