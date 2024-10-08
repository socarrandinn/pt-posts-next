"use client"
import { z } from "zod";

export const postSchema = (t: any) => z.object({
  id: z.number(),
  title: z.string({
    required_error: t('errors.required'),
  }),
  body: z.string({
    required_error: t('errors.required'),
  })
});
