import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { RootLayout } from "../layout";
import { NextPage } from "next";
import { ToastProvider } from "components/toast/provider";
import { SSRProvider } from "react-aria";
import { ThemeProvider } from "next-themes";
import { lightTheme, darkTheme } from "constant/theme";
import Head from "next/head";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  isFluid?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <>
      <Head>
        <title>NextUI Pro</title>
      </Head>
      <SSRProvider>
        <ThemeProvider
          defaultTheme="system"
          attribute="class"
          value={{
            light: lightTheme.className,
            dark: darkTheme.className,
          }}
        >
          <NextUIProvider >
            <ToastProvider>
              <RootLayout isLayout={Component?.isFluid}>
                <Component {...pageProps} />
              </RootLayout>
            </ToastProvider>
          </NextUIProvider>
        </ThemeProvider>
      </SSRProvider>
    </>
  );
}
