import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import PostForm from "./post-form"
import { useTranslations } from "next-intl"
import { IPost } from "../interfaces/post"

type PostCreateDialogProps = {
  title: string
  initValues?: Partial<IPost>
  open: boolean
  onClose?: () => void
  onOpen: () => void
}
export function PostCreateDialog({ title, initValues, open, onOpen, onClose }: PostCreateDialogProps) {
  const t = useTranslations('post')
  return (
    <Dialog open={open} onOpenChange={onOpen} >
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t(title || 'create')}</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>

        <PostForm initValues={initValues} onClose={onClose} />

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
