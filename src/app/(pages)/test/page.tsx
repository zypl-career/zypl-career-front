import { StatusSuccess } from '@/entities';

const TestPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="px-5 md:px-24 py-10">
        <StatusSuccess />
      </div>
    </div>
  );
};

export default TestPage;
