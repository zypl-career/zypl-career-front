import { resumeTemplates } from '..';
import { DownloadButton } from '@/shared';

export const FileSave = () => {
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
            {resumeTemplates.map((template, index) => (
              <tr key={index} className="border-t bg-white">
                <td className="py-4 px-4 text-gray-700">{template.title}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <DownloadButton
                      fileType="Word"
                      fileSize={+template.wordSize}
                    />
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <DownloadButton
                      fileType="PDF"
                      fileSize={+template.pdfSize}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
