'use client'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import React from 'react'
import { PostCreateDialog } from './post-create-dialog'
import useToggle from '@/lib/hooks/useToggle'
import { TypographyH2 } from '@/components/ui/typography'

const PostToolbar = () => {
  const t = useTranslations('post')
  const { isOpen, onClose, onOpen } = useToggle(false)
  return (
    <>
      <div className='flex flex-row justify-between mb-4'>
        <TypographyH2>
          {t('list')}
        </TypographyH2>
        <Button onClick={onOpen} variant="default">{t('create')}</Button>
      </div>
      <PostCreateDialog onOpen={onOpen} open={isOpen} onClose={onClose} title='create' />
    </>
  )
}

export default PostToolbar