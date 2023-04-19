import Head from "next/head";
import MobileLayout from "@/components/Mobile/Layout";
import DesktopLayout from "@/components/Desktop/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Khaled Sobhy Portfolio | Frontend</title>
        <meta
          name="description"
          content="Portfolio of 'Khaled sobhy anwar' Frontend developer Skilled in  html , css , javascript , react ,nextjs and tailwindcss."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Khaled Sobhy Portfolio | Frontend" />
        <meta
          name="og:description"
          content="Portfolio of 'Khaled sobhy anwar' Frontend developer Skilled in  html , css , javascript , react ,nextjs and tailwindcss."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
      </Head>
      <MobileLayout />
      <DesktopLayout />
    </>
  );
}
