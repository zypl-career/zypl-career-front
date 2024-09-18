import {
  Navbar,
} from '@/entities';
import { QuestionnaireValuesHead } from '@/entities/test-sixth';
import { Footer } from '@/widgets';

const QuestionnaireValuesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <QuestionnaireValuesHead />
      <Footer />
    </div>
  );
};

export default QuestionnaireValuesPage;
