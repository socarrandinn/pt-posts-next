import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";

export const ErrorHandle = ({ error }: any) => {
  const t = useTranslations('errors')

  if (error.status === 500 && error.message.includes('NetworkError')) {
    return (
      <Alert variant="destructive">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>{t('networkError.title')}</AlertTitle>
        <AlertDescription>
          {t('networkError.description')}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Alert variant="destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>{t('error.title')}</AlertTitle>
      <AlertDescription>
        {t('error.description')}
      </AlertDescription>
    </Alert>

  );
};