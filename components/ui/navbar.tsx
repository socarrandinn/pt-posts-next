import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { ToggleLanguage } from "../toggle-language";
import { TypographyH3 } from "./typography";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations('home')
  return (
    <header className="flex h-16 w-full items-center justify-between  px-4 md:px-6 z-10">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <Image src="/assets/logo.webp" width={36} height={36} alt='logo' />
        <TypographyH3 className="text-lg font-semibold hidden md:block">{t('title')}</TypographyH3>
      </Link>
      <div className="flex flex-row gap-3 items-center">
        <ModeToggle />
        <ToggleLanguage />
      </div>
    </header>
  )



}

export default Navbar