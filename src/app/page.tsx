import PrimaryNextLink from '@/src/components/buttons/PrimaryNextLink';
import SecondaryNextLink from '@/src/components/buttons/SecondaryNextLink';

export default function Home() {
  return (
    <main>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
              <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                <PrimaryNextLink href="/notes/new">Add new</PrimaryNextLink>
                <SecondaryNextLink href="/notes">View list</SecondaryNextLink>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
