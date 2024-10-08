'use client'
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations('post')

  return (
    <section className="flex p-3 md:p-6 justify-center items-center border rounded-md mx-auto max-w-3xl mt-10">
      <Link href={'/es/posts'}>
        <Button size={'lg'}>
          {t('list')}
        </Button>
      </Link>
    </section>
  )

}
