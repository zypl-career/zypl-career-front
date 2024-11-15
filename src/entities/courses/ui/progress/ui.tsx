export const ProgressBar = ({ progress }: { progress: number | string }) => {
  return (
    <div className="flex flex-col items-start relative">
      <span className="text-gray-500 text-sm mb-1">{progress} %</span>
      <div className="w-full bg-gray-200 rounded-full h-2.5 relative max-w-full overflow-hidden">
        <div
          className="bg-purple-600 h-2.5 rounded-full absolute"
          style={{ width: `${progress}%` }}
        ></div>
        <div
          className="absolute top-0 w-2.5 h-2.5 bg-purple-600 rounded-full"
          style={{ left: `calc(${progress}% - 5px)` }}
        ></div>
      </div>
    </div>
  );
};
