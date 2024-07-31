'use client';

import Image from 'next/image';
import { Teacher } from '@/shared';

export const TeachersHero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-white lg:px-36">
      <div className="py-5 px-2 md:py-32">
        <p className="text-2xl md:text-5xl font-bold md:pb-8">
          Учителя и практикующие профессию
        </p>
        <p className="text-gray-600">
          Эти ресурсы могут быть использованы преподавателями и специалистами по
          профориентации для поддержки карьерного роста учащихся. Помогите
          учащимся осознать себя и свои возможности, изучить варианты карьерного
          роста и принять карьерные решения.
        </p>
      </div>
      <div className="lg:w-96 py-24 flex justify-center">
        <Image src={Teacher} alt="video-hero" />
      </div>
    </div>
  );
};
