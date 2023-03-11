import Head from "next/head";
import MobileLayout from "@/components/Mobile/Layout";
import DesktopLayout from "@/components/Desktop/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Portfolio of 'Khaled sobhy' frontend developer ."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MobileLayout />
      <DesktopLayout />
    </>
  );
}
