import { MainValuesSureys, Navbar, ValuesSurveysHead } from '@/entities';
import { Footer } from '@/widgets';

const ValuesSurveyPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <ValuesSurveysHead />
      <MainValuesSureys />
      <Footer />
    </div>
  );
};

export default ValuesSurveyPage;
