'use client'
import { useTranslations } from 'next-intl'
import React from 'react'
import { IPost } from '../interfaces/post'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

type PostFormProps = {
  initValues?: Partial<IPost>
  onClose?: () => void,
  form: any
  onSubmit: any
}
const PostForm = ({ form, onSubmit }: PostFormProps) => {
  const t = useTranslations('post')

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" id="post-form">
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
      </form>
    </Form >
  )
}

export default PostForm