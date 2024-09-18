import { Navbar } from '@/entities';
import { Footer } from '@/widgets';
import { ChoosingValuesHead } from '@/entities/choosing-values/ui';

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
