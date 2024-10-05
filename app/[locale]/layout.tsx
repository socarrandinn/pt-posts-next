import type { Metadata } from "next";
import "../globals.css";
import { cn } from "@/lib/utils"
import AppProvider from "@/providers/app-provider";
import { fontPrimary } from "@/config/fonts";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/ui/navbar";
import Container from "@/components/container/container";

export const metadata: Metadata = {
  title: "Posts",
  description: "Prueba tecnica CRUD de post",
  applicationName: "posts-next",

};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontPrimary.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <AppProvider>
            <Container>
              <Navbar />
              {children}
            </Container>
            <Toaster />
          </AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
