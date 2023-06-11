import PrimaryNextLink from '@/src/components/buttons/PrimaryNextLink';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
              <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                <PrimaryNextLink href="/notes/new">Add new</PrimaryNextLink>
                <Link
                  href="/notes"
                  className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-pink-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  View list
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
