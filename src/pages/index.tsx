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
      <main className={`${inter.className}`}>
        {/* Banner */}
        <section
          className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center text-white"
          style={{ backgroundImage: "url(/background.png)" }}
        >
          <Image
            src="/brand.png"
            alt="Brand"
            width={500}
            height={500}
            className="w-[80%] bg-cover"
          />
        </section>
        {/* Lists */}
        <section className="p-5 md:p-10 bg-[#DEF5D9]">
          <div className="container mx-auto">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="p-5 flex flex-col items-center text-center bg-white rounded-2xl shadow-md">
                <Image
                  src="/package.png"
                  alt="Recycle"
                  width={500}
                  height={500}
                  className="w-12"
                />
                <h1 className="text-xl font-bold mt-4 mb-2 text-black">
                  Recycle Plastic Waste
                </h1>
                <p className="mt-2 text-gray-500 text-sm">
                  Plastic waste is a detrimental to our environment. Recycling
                  is the only way out. We need to recycle plastic in order to
                  reduce the harm we are causing to the environment.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-5 flex flex-col items-center text-center bg-white rounded-2xl shadow-md">
                <Image
                  src="/broken.png"
                  alt="Recycle"
                  width={500}
                  height={500}
                  className="w-12"
                />
                <h1 className="text-xl font-bold mt-4 mb-2 text-black">
                  Recycle E-waste
                </h1>
                <p className="mt-2 text-gray-500 text-sm">
                  E-Waste or Electronic wastes are discarded electrical or
                  electronic devices which damage the nature and affect human
                  and animal health. We ensure safe E-waste disposal.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-5 flex flex-col items-center text-center bg-white rounded-2xl shadow-md">
                <Image
                  src="/arrow.png"
                  alt="Recycle"
                  width={500}
                  height={500}
                  className="w-12"
                />
                <h1 className="text-xl font-bold mt-4 mb-2 text-black">
                  Recycling is A Must
                </h1>
                <p className="mt-2 text-gray-500 text-sm">
                  Recycling is very important and has a huge negative impact on
                  the natural environment. Recycling reduces the need for raw
                  materials so that resources are preserved.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
