import PrimaryNextLink from '@/src/components/buttons/PrimaryNextLink';
import SecondaryNextLink from '@/src/components/buttons/SecondaryNextLink';

export default function Home() {
  return (
    <main>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section>
            <div className="flex flex-col justify-center gap-2.5 sm:flex-row">
              <PrimaryNextLink href="/notes/new">Add new</PrimaryNextLink>
              <SecondaryNextLink href="/notes">View list</SecondaryNextLink>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
