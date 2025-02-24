import { Navbar, YourResultDesc } from '@entities';
import { Footer } from '@widgets';

const YourResultPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      <Navbar />
      <YourResultDesc />
      <Footer />
    </div>
  );
};
export default YourResultPage;
