/* eslint-disable react/no-unescaped-entities */
import { NextEducational } from '@/entities';
import { ArrowIcon, Button } from '@/shared';
import { titles } from '.';

export const ContentProfessions = () => {
  return (
    <div className="lg:px-28">
      <div className="py-10">
        <h3 className="font-semibold text-3xl pb-5">
          Подходящие профессии для вас
        </h3>
        <p className="text-gray-600 lg:w-[800px] pb-5">
          Действие "Значения" определяет, какие ценности важны для вас.
          <br />
          <br />
          Ваши карьерные ценности - это то, что вы лично считаете важным и
          получаете удовлетворение на работе. Когда вы определите и поймете свои
          ценности, вы сможете лучше изучить подходящие варианты карьеры.
        </p>
        <hr className="bg-gray-900" />
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {titles.map((title, index) => (
            <NextEducational key={index} title={title} />
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="white" startIcon={<ArrowIcon />}>
          Previous
        </Button>
        <Button variant="white" endIcon={<ArrowIcon />}>
          Next
        </Button>
      </div>
    </div>
  );
};
