'use client';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { Note } from '@/src/app/notes/type';
import PrimaryButton from '@/src/components/buttons/PrimaryButton';
import SecondaryNextLink from '@/src/components/buttons/SecondaryNextLink';
import Input from '@/src/components/inputs/Input';
import Textarea from '@/src/components/inputs/Textarea';

type EditNoteProps = {
  item: Note;
};

const EditNote: React.FC<EditNoteProps> = ({ item }) => {
  const router = useRouter();

  const [title, setTitle] = useState(item.title);
  const [body, setBody] = useState(item.body);

  const handleSaveButtonClick = useCallback(async () => {
    const res = await fetch(`/api/notes/${item.id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, body }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      alert('Note updated');
      router.push(`/notes/${item.id}`);
      router.refresh();
    } else {
      alert('Note failed to update');
    }
  }, [body, item.id, router, title]);

  return (
    <div className="relative flex flex-col gap-2.5 rounded-lg bg-gray-10 p-5">
      <div className="sm:col-span-2">
        <Input label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className="sm:col-span-2">
        <Textarea label="Body" value={body} onChange={(e) => setBody(e.target.value)} />
      </div>

      <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-end">
        <SecondaryNextLink href={`/notes/${item.id}`}>Cancel</SecondaryNextLink>
        <PrimaryButton onClick={handleSaveButtonClick}>Save</PrimaryButton>
      </div>
    </div>
  );
};

export default EditNote;
