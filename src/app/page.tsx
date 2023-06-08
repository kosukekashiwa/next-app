import Image from 'next/image';
import Link from 'next/link';
import coverPic from '@/public/vercel.svg';

export default function Home() {
  return (
    <main>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
              <p className="mb-4 font-semibold text-pink-500 md:mb-6 md:text-lg xl:text-xl">
                Introducing the App Directory
              </p>

              <h1 className="text-black-800 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
                Revolutionary way to build the web
              </h1>

              <p className="mb-4 leading-relaxed text-gray-500 md:mb-6 lg:w-4/5 xl:text-lg">
                Learn about the new features of Next.js 13 through building a note application.
              </p>
              <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
                Front-end development will be more fun.
              </p>
              <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/notes/new"
                  className="inline-block rounded-lg bg-pink-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-pink-300 transition duration-100 hover:bg-pink-600 focus-visible:ring active:bg-pink-700 md:text-base"
                >
                  Add new
                </Link>
                <Link
                  href="/notes"
                  className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-pink-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  View list
                </Link>
              </div>
            </div>

            <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
              <Image
                src={coverPic}
                priority
                alt="Photo by Fakurian Design"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
