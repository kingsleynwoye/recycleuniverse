import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Recycle Universe | Sustainability Platform</title>
        <meta
          name="description"
          content="Recycle Universe is a sustainability platform that guides users on best practices for recycling and environmental care."
        />
        <meta name="viewport" content="width=deviceWidth, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} bg-cover bg-center text-white`}
        style={{ backgroundImage: "url(/background.png)" }}
      >
        <Image src="/brand.png" alt="Brand" width={500} height={500} />
      </main>
    </>
  );
}
