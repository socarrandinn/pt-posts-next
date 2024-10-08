'use client'
import { useCallback, useState, useEffect } from "react";
import { PostCreateDialog } from "./post-create-dialog"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { IPost } from "../interfaces/post";
import { PostService } from "@/lib/services";

export const PostEditDialog = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const entityId = searchParams.get('edit')
  const router = useRouter()

  const [post, setPost] = useState<IPost>()

  useEffect(() => {
    const fetchPost = async () => {
      if (entityId !== null) {       
        const data = await PostService.getPost(Number(entityId))
        setPost(data)
      }
    }
    fetchPost()
  }, [entityId])

  console.log('post', post)

  const handleCloseEdit = useCallback(() => {
    router.push(`${pathname}`)
  }, [pathname, router]);

  return (
    <PostCreateDialog
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={post as unknown as IPost}
    />
  )
}