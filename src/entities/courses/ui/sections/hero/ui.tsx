import { CardSection, TabsCourses } from '@/entities';

export const CoursesHero = () => {
  return (
    <div className="px-24">
      <h2 className="text-3xl font-bold py-8 ">Курсы</h2>
      <p>
        Изучите курсы, разработанные специально для вас и отражающие ваши
        интересы и достижения.
      </p>
      <div className="my-5">
        <TabsCourses />
      </div>
    </div>
  );
};
