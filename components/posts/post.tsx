import { Suspense } from "react"
import Table from "../customers/table/table"
import { postColumns } from "./constants/posts.column"
import { PostService } from "@/lib/services"
import TableSkeleton from "../customers/table/table-skeleton"
import PostToolbar from "./components/post-toogle"
import { PostEditDialog } from "./components/post-edit-dialog"


export const PostList = async () => {
  const posts = await PostService.getAllPosts()

  return (
    <Suspense fallback={<TableSkeleton columns={postColumns} />}>
      <PostToolbar />
      <Table columns={postColumns} data={posts} />
      <PostEditDialog />
    </Suspense>
  )
}
