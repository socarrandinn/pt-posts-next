import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { ToggleLanguage } from "../toggle-language";
import { TypographyH3 } from "./typography";
import { useTranslations } from "next-intl";
import { HomeIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  const t = useTranslations('home')
  return (
    <header className="flex h-16 w-full items-center justify-between  px-4 md:px-6 z-10">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <div className="h-8 border border-white rounded-sm w-8 flex justify-center items-center">
          <HomeIcon className="w-6 h-6" />
        </div>
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