'use client';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { Note } from '../type';
import PrimaryNextLink from '@/src/ui/buttons/PrimaryNextLink';
import DestructiveButton from '@/src/ui/buttons/DestructiveButton';
import Dialog from '@/src/ui/feedbakcs/Dialog';
import SecondaryButton from '@/src/ui/buttons/SecondaryButton';

type NoteProps = {
  item: Note;
};

const Note: React.FC<NoteProps> = ({ item }) => {
  const router = useRouter();

  const handleDeleteButtonClick = useCallback(async () => {
    const res = await fetch(`/api/notes/${item.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      // alert('Note deleted');
      router.push(`/notes`);
      router.refresh();
    } else {
      alert('Note failed to delete');
    }
  }, [item.id, router]);

  return (
    <div className="relative flex flex-col gap-2.5 rounded-lg bg-gray-10 p-5">
      <h3 className="break-all text-lg font-semibold md:text-xl">{item.title}</h3>
      <p className="break-all text-gray-60">{item.body}</p>

      <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-end">
        <PrimaryNextLink href={`/notes/${item.id}/edit`}>Edit</PrimaryNextLink>
        <Dialog
          description="メモを削除します。よろしいですか？"
          openButton={
            // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/explicit-function-return-type
            <DestructiveButton onClick={() => {}} emphasis="subtle">
              Delete
            </DestructiveButton>
          }
          actions={[
            // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/explicit-function-return-type
            <SecondaryButton key="1" onClick={() => {}}>
              Cancel
            </SecondaryButton>,
            <DestructiveButton key="2" onClick={handleDeleteButtonClick}>
              Delete
            </DestructiveButton>,
          ]}
        />
      </div>
    </div>
  );
};

export default Note;
