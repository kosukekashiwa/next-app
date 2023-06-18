'use client';
import useSWR from 'swr';
import { Note, zNotes } from '@/src/app/notes/type';
import { PencilIcon } from '@heroicons/react/24/outline';
import PrimaryNextLink from '@/src/components/buttons/PrimaryNextLink';
import PrimaryNextLinkIcon from '@/src/components/buttons/PrimaryNextLinkIcon';

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
    <div className="relative rounded-lg bg-gray-10 p-5 pt-8">
      <div className="absolute -top-4 left-4">
        <PrimaryNextLinkIcon href={`/notes/${item.id}/edit`} size="small" shape="circle">
          <PencilIcon className="text-white" />
        </PrimaryNextLinkIcon>
      </div>
      <PrimaryNextLink href={`/notes/${item.id}`} prefetch={false} emphasis="minimal">
        {item.title}
      </PrimaryNextLink>
      <p className="break-all text-gray-100">{item.body}</p>
    </div>
  );
};

export default NoteList;
