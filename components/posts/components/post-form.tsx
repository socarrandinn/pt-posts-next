'use client'
import { useTranslations } from 'next-intl'
import React from 'react'
import { IPost } from '../interfaces/post'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import EditorForm from '@/components/common/editor-form/editor-from'

type PostFormProps = {
  initValue?: Partial<IPost>
  onClose?: () => void,
  form: any
  onSubmit: any
}
const PostForm = ({ form, onSubmit }: PostFormProps) => {
  const t = useTranslations()

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" id="post-form">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('post.field.title')}</FormLabel>
              <FormControl>
                <Input type="text" placeholder={t('post.field.title')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <EditorForm name='body' title={t('post.field.body')} form={form} />
      </form>
    </Form >
  )
}

export default PostForm