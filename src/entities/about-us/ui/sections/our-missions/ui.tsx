import { missionContent } from '.';

export const OurMissions = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-10 pb-40 px-5 lg:px-28">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Наша миссия</h2>
        <p>
          {missionContent.mission.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Наши цели</h2>
        <ul className="list-disc list-inside">
          {missionContent.goals.map((goal, index) => (
            <li key={index}>
              <strong>{goal.title}:</strong> {goal.description}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-4">Портал содержит</h2>
        <ul className="list-disc list-inside">
          {missionContent.portal.map((item, index) => (
            <li key={index}>
              <strong>{item.title}:</strong> {item.description}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-4">Присоединяйтесь к нам!</h2>
        <p>{missionContent.joinUs}</p>
      </div>
    </main>
  );
};
