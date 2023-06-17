import PrimaryNextLink from "@/src/components/buttons/PrimaryNextLink";
import SecondaryNextLink from "@/src/components/buttons/SecondaryNextLink";

export default function Home() {
  return (
    <section>
      <div className="flex flex-col justify-center gap-2.5 sm:flex-row">
        <PrimaryNextLink href="/notes/new">Add new</PrimaryNextLink>
        <SecondaryNextLink href="/notes">View list</SecondaryNextLink>
      </div>
    </section>
  );
}
