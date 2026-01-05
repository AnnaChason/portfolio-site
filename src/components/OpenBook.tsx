import React from 'react';
import ColorMap from '../style/ColorMap.ts'

interface OpenBookProps {
    title: string;
    content: string;
    color: string;
}

const OpenBook: React.FC<OpenBookProps> = (
    {title, content, color}) => {
    return (
        <div>
            <div className="fixed inset-0 backdrop-blur-sm bg-black/20 z-40" />
            <div className="fixed inset-0 flex items-center justify-center drop-shadow-lg z-50 ">
            <div className="flex m-1 ">
                <div className={"rounded-l flex justify-center p-3 pr-0 sm:h-[30rem] sm:w-96 h-96 w-52 "+ ColorMap[color]}>
                    <div className={"bg-amber-50 w-full h-full flex items-center justify-center"}>
                        <h1 className={"text-brown-800 font-bold font-serif text-3xl sm:text-5xl"}>{title}</h1>
                    </div>
                </div>
                <div className={" flex justify-center sm:h-[30rem] h-96 pt-3 pb-3 w-5 " + ColorMap["d"+color]}>
                    <div className={"w-full h-full bg-gradient-to-r from-amber-50 to-parchment-300"}></div>
                    <div className={"w-full h-full bg-gradient-to-l from-amber-50 to-parchment-300"}></div>
                </div>
                <div className={"rounded-r flex justify-center sm:h-[30rem] sm:w-96 w-52 p-3 pl-0 " + ColorMap[color]}>
                    <div className={"bg-amber-50 w-full h-full p-3 flex justify-start"}>
                        <p className={"text-brown-900 text-md sm:text-lg"}>{content}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default OpenBook;