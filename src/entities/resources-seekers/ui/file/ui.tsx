'use client';

import { filteredDocx, filteredPDF } from './model';
import { DownloadButton, Spinner } from '@ui';
import { useResourcesSeekerFiles } from './services';

export const FileSave = () => {
  const { data, isLoading } = useResourcesSeekerFiles();
  return (
    <div className="border my-5 lg:mx-24 rounded-xl">
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#F9FAFB] text-gray-700">
              <th className="py-4 px-4 text-left">ШАБЛОНЫ РЕЗЮМЕ</th>
              <th className="py-4 px-4 text-left">WORD</th>
              <th className="py-4 px-4 text-left">PDF</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td className="py-4 px-4 text-gray-700" colSpan={3}>
                  <Spinner />
                </td>
              </tr>
            ) : (
              data?.map((template, index) => (
                <tr key={index} className="border-t bg-white">
                  <td className="py-4 px-4 text-gray-700">{template.title}</td>
                  <td className="py-4 px-1 lg:px-4">
                    <div className="flex items-center space-x-2">
                      {filteredDocx(template.description)?.map((item) => (
                        <DownloadButton
                          key={item.id}
                          fileType={item.props.name}
                          fileUrl={item.props.url}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      {filteredPDF(template.description)?.map((item) => (
                        <DownloadButton
                          key={item.id}
                          fileType={item.props.name}
                          fileUrl={item.props.url}
                        />
                      ))}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
