import { apiUrl } from '@/src/constants/api';
import { zNotes } from './type';

export const getNotes = async (): Promise<
  {
    id: number;
    title: string;
    body: string;
    createdAt: string;
    updatedAt: string;
  }[]
> => {
  const res = await fetch(`${apiUrl}/notes`, { cache: 'no-store' });
  const data = await res.json();
  const notes = zNotes.parse(data);

  return notes;
};
