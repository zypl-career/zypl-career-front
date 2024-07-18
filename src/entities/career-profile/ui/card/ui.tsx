import { Button, TimeIcon } from '@/shared';

export const CardFuture = () => {
  return (
    <div className="bg-white py-5 px-5">
      <h3 className="font-bold text-lg">Формируйте свое будущее</h3>
      <p className="text-gray-600">
        zypl.career предоставляет ресурсы для изучения карьерных путей и
        инструментов для развития самопознания, чтобы помочь в принятии решений
        о карьере.
      </p>
      <div className="pt-5 lg:pt-10 lg:flex items-center gap-2">
        <Button variant="subscribe" showRightArrowIcon={true} size="subscribe">
          Пройти тест
        </Button>
        <div className="flex items-center justify-center gap-1 py-2">
          <TimeIcon />
          <p className="font-thin">Займет около часа</p>
        </div>
      </div>
    </div>
  );
};
