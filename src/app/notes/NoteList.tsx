'use client';
import Link from 'next/link';
import useSWR from 'swr';
import { Note, zNotes } from '@/src/app/notes/type';

type NoteListProps = {
  initialState: Note[];
};

const fetcher = (url: string) =>
  fetch(url).then(async (res) => {
    const data = await res.json();
    const notes = zNotes.parse(data);

    return notes;
  });

const NoteList: React.FC<NoteListProps> = ({ initialState }) => {
  const { data } = useSWR('/api/notes', fetcher, {
    suspense: true,
    fallbackData: initialState,
  });

  return (
    <div className="grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3">
      {data.map((note) => (
        <NoteItem key={note.id} item={note} />
      ))}
    </div>
  );
};

type NoteItemProps = {
  item: Note;
};

const NoteItem: React.FC<NoteItemProps> = ({ item }) => {
  return (
    <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
      <Link href={`/notes/${item.id}/edit`} className="absolute -top-4 left-4">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 25 25"
            fill="currentColor"
          >
            <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
          </svg>
        </span>
      </Link>
      <Link href={`/notes/${item.id}`} prefetch={false}>
        <h3 className="mb-3 break-all text-lg font-semibold text-pink-500 underline underline-offset-2 hover:text-pink-700 md:text-xl">
          {item.title}
        </h3>
      </Link>
      <p className="break-all text-gray-500">{item.body}</p>
    </div>
  );
};

export default NoteList;
