import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
export enum LOCALES_ENUM{
  ES ='es',
  EN = 'en'
}
export const locales = Object.values(LOCALES_ENUM)
 
export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as LOCALES_ENUM)) notFound();
 
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});