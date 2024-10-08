'use client'
import { useCallback } from "react";
import { PostCreateDialog } from "./post-create-dialog"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { IPost } from "../interfaces/post";
import { useFindOnePost } from "../hooks/useFindOnePost";

export const PostEditDialog = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const entityId = searchParams.get('edit')
  const { data, error, isLoading } = useFindOnePost(entityId as unknown as number)
  const router = useRouter()


  const handleCloseEdit = useCallback(() => {
    router.push(`${pathname}`)
  }, [pathname, router]);

  return (
    <PostCreateDialog
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data as unknown as IPost}
      loadingInitData={isLoading}
      dataError={error}
    />
  )
}