import React from "react";

import ColorMap from '../style/ColorMap.ts'

interface BookProps {
    title: string;
    color: string;
    onClick: () => void;
}

const BookSpine: React.FC<BookProps> = ({title, color, onClick}) => {
    return (
        <div onClick={onClick} className={"lg:hidden relative flex flex-col h-[270px] w-16 rounded-sm m-2 mt-3 mb-0 justify-center items-center hover:-translate-y-2 bg-cover " + ColorMap["ps"+color]}>
            <h2 className={"absolute inset-0 flex items-center justify-center rotate-90 font-bold text-xl whitespace-nowrap overflow-visible " + ColorMap["t"+color]}>{title}</h2>
        </div>
    );
}

export default BookSpine;