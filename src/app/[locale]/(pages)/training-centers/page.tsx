import {
  EducationCenter,
  // MoreCardTraining,
  Navbar,
  TrainingCenterHero,
} from '@entities';
import { Footer } from '@widgets';

const PartnersPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <TrainingCenterHero />
      <EducationCenter />
      {/* <BadgesSection /> */}
      {/* <p className="text-center font-semibold text-2xl">Душанбе</p> */}
      {/* <MoreCardTraining /> */}
      <Footer />
    </div>
  );
};

export default PartnersPage;
