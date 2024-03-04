import Head from "next/head";
import {
  Education,
  Info,
  Projects,
  Referees,
  Skills,
  WorkHistory,
} from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Resume | Gem Hannan</title>
        <meta
          name="description"
          content="Resume - Content Specialist & Web Designer | Gem Hannan."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Info />
        <Skills />
        <Education />
        <WorkHistory />
        <Projects />
        <Referees />
      </main>
    </>
  );
}
