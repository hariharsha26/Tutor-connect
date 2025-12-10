import { getNotes } from '@/lib/data';
import NotesList from '@/components/NotesList';

export const metadata = {
    title: 'Study Notes - TutorConnect',
    description: 'Access study materials.',
};

export default function NotesPage() {
    const notes = getNotes();
    return <NotesList notes={notes} />;
}
