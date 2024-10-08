import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import PostForm from "./post-form"
import { useTranslations } from "next-intl"
import { IPost } from "../interfaces/post"
import { ButtonLoading } from "@/components/ui/button-loading"
import { usePostCreateForm } from "../hooks/use-post-form"
import { Suspense } from "react"
import PostSkeletonForm from "./post-skeleton-form"

type PostCreateDialogProps = {
  title: string
  subtitle?: string
  initValue?: IPost
  open: boolean
  onClose?: () => void
  onOpen?: () => void
}
export function PostCreateDialog({ title, subtitle, initValue, open, onOpen, onClose }: PostCreateDialogProps) {
  const t = useTranslations()
  const { form, onSubmit, isPending } = usePostCreateForm({ initValue, onClose })
  return (
    <Dialog open={open} modal onOpenChange={onOpen}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{t(`post.${title}` || 'create')}</DialogTitle>
          {subtitle && <DialogDescription>{subtitle}</DialogDescription>}
        </DialogHeader>

        <Suspense fallback={<PostSkeletonForm />}>
          <PostForm initValue={initValue} onClose={onClose} form={form} onSubmit={onSubmit} />
        </Suspense>

        <DialogFooter className="sm:justify-end">
          <Button onClick={onClose} type="button" variant="secondary">
            {t('common.cancel')}
          </Button>
          <ButtonLoading loading={isPending} form="post-form" type="submit">
            {t('common.save')}
          </ButtonLoading>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
