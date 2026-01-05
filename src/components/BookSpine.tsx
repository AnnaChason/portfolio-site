import React from "react";

import ColorMap from '../style/ColorMap.ts'

interface BookProps {
    title: string;
    color: string;
}

const BookSpine: React.FC<BookProps> = ({title, color}) => {
    return (
        <div className={"lg:hidden relative flex flex-col h-[270px] w-16 rounded-sm m-2 mt-3 mb-0 justify-center items-center hover:-translate-y-2 bg-cover " + ColorMap["ps"+color]}>
            <h2 className={"absolute inset-0 flex items-center justify-center rotate-90 font-bold text-xl whitespace-nowrap overflow-visible " + ColorMap["t"+color]}>{title}</h2>
        </div>
    );
}

export const BookSpineSide: React.FC<BookProps> = ({title, color}) => {
    return (
        <div className={"flex w-64 h-12 rounded-sm mt-3 mb-0 border justify-center items-center "+ ColorMap["b" + color] +" hover:-translate-y-2 " + ColorMap["d"+color]}>
            <div className={"w-2 h-full rounded translate-x-3 "+ColorMap[color]}></div>
            <h2 className={" font-bold h-full text-xl w-64 translate-y-2 " + ColorMap["dt"+color]}>{title}</h2>
            <div className={"w-2 h-full rounded -translate-x-3 "+ColorMap[color]}></div>
        </div>
    );
}
export default BookSpine;