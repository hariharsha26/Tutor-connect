import { getTutors } from '@/lib/data';
import CompareContent from '@/components/CompareContent';

export const metadata = {
    title: 'Compare Tutors - TutorConnect',
    description: 'Compare tutors side-by-side.',
};

export default function ComparePage() {
    const tutors = getTutors();
    return <CompareContent tutors={tutors} />;
}
