import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import React from 'react'
import { IPost } from '../interfaces/post'
import { useTranslations } from 'next-intl'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

type PostRowActionProps = {
  rowId: number
  record: IPost
}
const PostRowAction = ({ rowId }: PostRowActionProps) => {
  const t = useTranslations('')
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const route = useRouter()

  const handleEdit = () => {
      const params = new URLSearchParams(searchParams)
      params.set('edit', String(rowId))
      console.log(`${pathname}?${params.toString()}`)
      route.push(`${pathname}?${params.toString()}`)
   }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 md:w-16 p-0">
          <span className="sr-only">Open menu</span>
          <DotsHorizontalIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t('common.actions')}</DropdownMenuLabel>
        <DropdownMenuItem onClick={handleEdit}>
          {t('post.edit')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default PostRowAction