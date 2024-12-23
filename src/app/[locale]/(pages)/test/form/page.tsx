import { Navbar } from '@/entities';
import { Footer } from '@/widgets';
import { FormInfo } from '@/entities/form/ui';

const FormInfoPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <FormInfo />
      <Footer />
    </div>
  );
};

export default FormInfoPage;
