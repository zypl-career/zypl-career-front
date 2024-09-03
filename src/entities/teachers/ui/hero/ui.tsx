'use client';

import Image from 'next/image';
import { Teacher } from '@/shared';

export const TeachersHero = () => {
  return (
    <div className="bg-white">
      <div className="container flex flex-col md:flex-row justify-between theme:bg-primaryBg theme:text-primary theme:border-b theme:border-primary">
        <div className="order-1 md:order-2 pt-24 flex justify-center">
          <Image src={Teacher} alt="video-hero" className="w-52 h-52" />
        </div>
        <div className="order-2 md:order-1 py-5 md:py-32">
          <p className="text-2xl md:text-5xl font-bold md:pb-8 md:w-[702px]">
            Учителя и практикующие профессию
          </p>
          <p className="text-gray-600 md:w-[522px] theme:text-primary">
            Эти ресурсы могут быть использованы преподавателями и специалистами
            по профориентации для поддержки карьерного роста учащихся. Помогите
            учащимся осознать себя и свои возможности, изучить варианты
            карьерного роста и принять карьерные решения.
          </p>
        </div>
      </div>
    </div>
  );
};
