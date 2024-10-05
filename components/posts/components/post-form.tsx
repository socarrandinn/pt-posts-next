'use client'
import { useTranslations } from 'next-intl'
import React from 'react'
import { usePostCreateForm } from '../hooks/use-post-form'
import { IPost } from '../interfaces/post'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ButtonLoading } from '@/components/ui/button-loading'

type PostFormProps = {
  initValues?: Partial<IPost>
  onClose?: () => void
}
const PostForm = ({ initValues, onClose }: PostFormProps) => {
  const { form, onSubmit, isPending } = usePostCreateForm({ initValues, onClose })
  const t = useTranslations('post')

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('field.title')}</FormLabel>
              <FormControl>
                <Input type="number" placeholder={t('investment.field.amount')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonLoading loading={isPending} type="submit" className="w-full">
          {t('investment.investment')}
        </ButtonLoading>
      </form>
    </Form >
  )
}

export default PostForm