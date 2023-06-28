import PrimaryNextLink from '@/src/ui/buttons/PrimaryNextLink';
import SecondaryNextLink from '@/src/ui/buttons/SecondaryNextLink';

export default function Home() {
  return (
    <section>
      <div className="flex flex-col justify-center gap-2 sm:flex-row">
        <PrimaryNextLink href="/notes/new">Add new</PrimaryNextLink>
        <SecondaryNextLink href="/notes">View list</SecondaryNextLink>
      </div>
    </section>
  );
}
