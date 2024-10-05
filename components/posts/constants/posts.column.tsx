'use client'

import { ColumnDef } from "@tanstack/react-table";
import { IPost } from "../interfaces/post";
import PostRowAction from "../components/post-row-action";
import { LongText } from "@/components/common/long-text";


const titleColumn: ColumnDef<IPost> = {
  accessorKey: "title",
  header: "post.field.title",
  cell: ({ row }) => <LongText text={row.getValue("title")} lineClamp={1} />

}

const bodyColumn: ColumnDef<IPost> = {
  accessorKey: "body",
  header: "post.field.body",
  cell: ({ row }) => <LongText text={row.getValue("body")} lineClamp={2} />
}


const actionColumn: ColumnDef<IPost> = {
  id: "actions",
  enableHiding: false,
  cell: ({ row }) => {
    const post = row.original
    return (
      <PostRowAction rowId={post.id} record={post} />
    )
  }
}

export const postColumns: ColumnDef<IPost>[] = [
  titleColumn,
  bodyColumn,
  actionColumn
]