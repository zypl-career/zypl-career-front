import { FC } from 'react';
import { dataSociology, SociologyCard } from '@/entities/sociology';
import { TRelatedSociologyData } from '@/entities';

export const ActivitySociology: FC<{ data: TRelatedSociologyData }> = ({
  data,
}) => {
  const mappedData = dataSociology.map((itm, i) => ({
    ...itm,
    ...data.sociology[i],
    name: itm.title,
    description: data.sociology[i]?.[itm?.key || 'description'],
  }));

  return (
    <div className="grid md:grid-cols-3 gap-5 my-5">
      {data.sociology.map((itm) => (
        <div
          className="bg-white border border-gray-200 rounded-xl p-4"
          key={itm.id}
        >
          {mappedData.map((item, index) => (
            <SociologyCard
              key={index}
              title={item.name}
              description={itm[item.key || 'description']}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
