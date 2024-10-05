'use client';
import {
  ActivitySociology,
  HeroSociology,
  Navbar,
  ReviewSociology,
  TABLE_DATA,
  // SociologyCards,
  relatedSociologyData,
} from '@/entities';
import { Footer } from '@/widgets';
import type { PageParams } from '@types';

const SociologyPage = ({ params }: PageParams) => {
  const { id } = params;
  const sociology = relatedSociologyData.find((item) => item.id === +id);
  const classer = TABLE_DATA.find((item) => item.id === sociology?.classerId);
  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="container">
        {sociology ? (
          <>
            <HeroSociology title={sociology.title} name={classer?.title || ''} />
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
