import { Navbar } from '@/entities';
import { ChoosingValuesHead } from '@/entities/test-seventh';
import { Footer } from '@/widgets';

const ChoosingValuesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container">
        <ChoosingValuesHead />
      </div>
      <Footer />
    </div>
  );
};

export default ChoosingValuesPage;
