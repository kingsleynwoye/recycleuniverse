import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} bg-cover bg-center text-white`}
      style={{ backgroundImage: "url(/background.png)" }}
    >
      <Image src="/brand.png" alt="Brand" width={500} height={500} />
    </main>
  );
}
