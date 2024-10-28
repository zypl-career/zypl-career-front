import { Navbar, Lessons } from '@entities';
import { PageParams } from '@types';
import { Footer } from '@/widgets';

const CoursesIdPage = ({ params }: PageParams) => {
  const { id } = params;

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Lessons courseId={id} />
      <Footer />
    </div>
  );
};
export default CoursesIdPage;
