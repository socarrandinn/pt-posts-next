'use client'
import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { POST_ONE_KEY } from '../constants/query';
import { PostService } from '@/lib/services';


export const useFindOnePost = (id: number) => {
  const fetch = useCallback(() => PostService.getPost(id), [id]);
  return useQuery({
    queryKey: [id, POST_ONE_KEY],
    queryFn: fetch,
    enabled: !!id
  });
};
