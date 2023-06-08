import { apiUrl } from '@/src/constants/api';
import { zNotes } from './type';

export const getNotes = async () => {
  const res = await fetch(`${apiUrl}/notes`, { cache: 'no-store' });
  const data = await res.json();
  const notes = zNotes.parse(data);

  return notes;
};
