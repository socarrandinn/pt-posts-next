"use client"

import * as React from "react"
import { ChildrenProps } from "@/types"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"


// Setup queryClient
const queryClient = new QueryClient()

export const REFERCH_INTERVAL = 5000 //5s



export function ReactQueryProvider({ children }: ChildrenProps) {

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
