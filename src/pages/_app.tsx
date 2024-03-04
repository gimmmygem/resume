import "@/styles/globals.css";
import { classes } from "@/utils";
import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";

import styles from "@/styles/layout.module.css";

const font = Raleway({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={classes(styles.main, font.className)}>
      <Component {...pageProps} />
    </main>
  );
}
