import { getTutor, getTutors } from '@/lib/data';
import TutorProfile from '@/components/TutorProfile';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const tutors = getTutors();
    return tutors.map((tutor) => ({
        id: tutor.id,
    }));
}

export default async function TutorPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const tutor = getTutor(id);

    if (!tutor) {
        notFound();
    }

    return <TutorProfile tutor={tutor} />;
}
