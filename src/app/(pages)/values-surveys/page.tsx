import { Navbar, ValuesSurveysHead } from '@/entities';
import { Footer } from '@/widgets';

const ValuesSurveyPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container">
        <ValuesSurveysHead />
      </div>

      <Footer />
    </div>
  );
};

export default ValuesSurveyPage;
