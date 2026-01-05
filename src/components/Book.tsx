import React from 'react';
import ColorMap from '../style/ColorMap.ts'

export interface BookProps {
    title: string;
    color: string;
}


const Book: React.FC<BookProps> = ({
    title,
    color
}) => {


    return (
        <div className={"bg-white flex pr-1 pt-1 shadow-md rounded h-[270px] w-48 border-2 border-solid m-3 mb-0 hover:-translate-y-2 " + ColorMap["b" + color]}>
            <div className={"w-5 h-full " + ColorMap["d"+color]}></div>
            <div className={"rounded-r flex flex-wrap h-full flex-grow bg-cover " + ColorMap["pc"+color]}>

                <div className="flex flex-grow justify-center h-full w- bg-none">
                    <h2 className={"m-4 text-center mt-16 font-bold text-2xl " + ColorMap["t"+color] }>{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default Book;
