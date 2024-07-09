import { footerData } from '@/widgets';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 p-8">
      <div className="flex lg:px-24 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-2 hover:underline cursor-pointer">{section.title}</h3>
              <ul>
                {section.items.map((item, idx) => (
                  <li key={idx} className="mb-1 hover:underline cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
