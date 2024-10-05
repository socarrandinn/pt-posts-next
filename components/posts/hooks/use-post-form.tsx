"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { postSchema } from "../schemas/post.schema"
import { z } from "zod"
import { useTranslations } from "next-intl"
import { useCallback } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { IPost } from "../interfaces/post"
import { PostService } from "@/lib/services"
import { POST_LIST_KEY } from "../constants/query"

type PostFormProps = {
  initValues?: Partial<IPost>
  onClose?: () => void
}
export const usePostCreateForm = ({ initValues, onClose }: PostFormProps) => {
  const t = useTranslations()
  const schema = postSchema(t)
  const queryClient = useQueryClient()

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: initValues
  })

  const {
    mutate,
    reset: resetMutation,
    error,
    isPending,
    isSuccess,
    data,
  } = useMutation({

    mutationFn: (post: IPost): Promise<IPost> => {
      if (post.id) {
        return PostService.updatePost(post)
      }
      return PostService.createPost(post)
    },
    onSuccess: (_data: IPost, values: IPost) => {
      queryClient.invalidateQueries({ queryKey: [POST_LIST_KEY] });
      toast.success(t(values?.id ? 'successUpdate' : 'successCreated'));
      onClose?.();
      form.reset();
    },
    onError: () => {
      toast.error(t('errors:generalErrorMessage'));
    }
  },
  );

  const reset = useCallback(() => {
    form.reset();
    resetMutation();
  }, [form, resetMutation]);




  return {
    form,
    onSubmit: (values: any) => {
      mutate(values);
    },
    reset,
    error,
    isPending,
    isSuccess,
    data,
  }
}
