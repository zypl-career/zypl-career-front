import Image from 'next/image';
import { Button, Input, PaperPlane } from '@/shared';
import { MoreCard, moreData } from '@/entities';

export const CareerTips = () => {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="flex flex-col md:px-24 md:flex-row justify-between">
        <div className="py-5 px-2  md:py-32">
          <p className="text-2xl md:text-5xl md:w-[522px] font-bold md:pb-8">
            Советы по карьере
          </p>
          <p className="font-bold text-gray-600 py-2">
            Получайте информацию о карьере прямо на свой почтовый ящик
          </p>
          <p className="md:w-[800px] text-gray-500">
            Будьте на шаг впереди! Зарегистрируйте учетную запись myfuture и
            установите флажок, чтобы получать актуальную информацию о карьере о
            профессиях, курсах, карьерных путях, выборе предметов, днях открытых
            дверей.
          </p>
          <div className="py-5">
            <Input
              variant="outline"
              className="md:w-[360px]"
              label="Электронная почта*"
            />
            <div className="py-5">
              <Button
                variant="subscribe"
                showRightArrowIcon={true}
                size="subscribe"
              >
                Подписаться
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-5 md:py-14">
          <Image src={PaperPlane} alt="hero" width={500} height={500} />
        </div>
      </div>

      <div className="grid grid-rows-1 md:grid-cols-3 px-5 lg:mx-20 md:mx-20 pb-4 lg:pb-10">
        {moreData.map((card, index) => (
          <MoreCard
            key={index}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            imageHeight={card.imageHeight}
            imageWidth={card.imageWidth}
            title={card.title}
            date={card.date}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </section>
  );
};
