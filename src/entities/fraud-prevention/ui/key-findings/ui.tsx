import { KEY_FINDINGS_FRAUD_PREVENTIONS } from '..';

export const KeyFindings = () => {
  return (
    <div className="bg-[#F2F5F8] rounded-xl p-10">
      <h3 className="py-2 text-xl font-bold">
        {KEY_FINDINGS_FRAUD_PREVENTIONS.keyFindings.heading}
      </h3>
      <div
        className="leading-9"
        dangerouslySetInnerHTML={{
          __html: KEY_FINDINGS_FRAUD_PREVENTIONS.keyFindings.findings,
        }}
      ></div>
    </div>
  );
};
