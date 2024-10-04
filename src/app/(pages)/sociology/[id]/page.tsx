'use client';
import {
  ActivitySociology,
  HeroSociology,
  Navbar,
  ReviewSociology,
  // SociologyCards,
  relatedSociologyData,
} from '@/entities';
import { Footer } from '@/widgets';
import type { PageParams } from '@types';

const SociologyPage = ({ params }: PageParams) => {
  const { id } = params;
  const sociology = relatedSociologyData.find((item) => item.id === +id);
  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="container">
        {sociology ? (
          <>
            <HeroSociology name={sociology.title} />
            {/* <SociologyCards /> */}
            <ReviewSociology description={sociology} />
            <ActivitySociology data={sociology} />
          </>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};
export default SociologyPage;
