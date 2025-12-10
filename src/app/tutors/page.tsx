import { getTutors } from '@/lib/data';
import TutorExplorer from '@/components/TutorExplorer';

export const metadata = {
    title: 'Find Tutors - TutorConnect',
    description: 'Browse our list of expert tutors.',
};

export default function TutorsPage() {
    const tutors = getTutors();
    return <TutorExplorer tutors={tutors} />;
}
