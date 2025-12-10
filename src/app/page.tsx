import { getTutors } from '@/lib/data';
import HomeContent from '@/components/HomeContent';

export default function Home() {
  const tutors = getTutors();
  return <HomeContent tutors={tutors} />;
}
