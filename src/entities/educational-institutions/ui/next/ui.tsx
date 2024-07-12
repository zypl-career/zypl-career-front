import { NextIcon } from '@/shared';

export const NextEducational = ({ title }) => {
    return (
        <div className="bg-white flex justify-between lg:w-[522px] lg:h-[72px] items-center px-5 rounded-xl my-2">
            <p>{title}</p>
            <NextIcon />
        </div>
    );
};
