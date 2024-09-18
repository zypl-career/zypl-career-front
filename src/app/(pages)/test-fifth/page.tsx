import { Navbar } from '@/entities';
import { ChoosingValuesHead } from '@/entities/test-fifth';
import { Footer } from '@/widgets';

const ChoosingValuesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <ChoosingValuesHead />
      <Footer />
    </div>
  );
};

export default ChoosingValuesPage;
