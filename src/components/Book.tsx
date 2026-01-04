import React from 'react';


const bgColorMap: Record<string, string> = {
    blue: "bg-blue-400",
    red: "bg-red-400",
    green: "bg-green-600",
    yellow: "bg-yellow-400",
    purple: "bg-purple-400",
    orange: "bg-orange-400",
    pink: "bg-pink-400",

    dblue: "bg-blue-900",
    dred: "bg-red-900",
    dgreen: "bg-green-950",
    dyellow: "bg-yellow-900",
    dpurple: "bg-purple-900",
    dorange: "bg-orange-900",
    dpink: "bg-pink-900",

    tblue: "text-blue-900",
    tred: "text-red-900",
    tgreen: "text-green-900",
    tyellow: "text-yellow-900",
    tpurple: "text-purple-900",
    torange: "text-orange-900",
    tpink: "text-pink-900",

    bblue: "border-blue-900",
    bred: "border-red-900",
    bgreen: "border-green-900",
    byellow: "border-yellow-900",
    bpurple: "border-purple-900",
    borange: "border-orange-900",
    bpink: "border-purple-900",
};

interface BookProps {
    title: string;
    color: string;
}

const Book: React.FC<BookProps> = ({
    title,
    color
}) => {


    return (
        <div className={"bg-white flex pr-1 pt-1 shadow-md rounded h-64 w-48 border-2 border-solid m-3 mb-0 hover:-translate-y-2 " + bgColorMap["b" + color]}>
            <div className={"w-5 h-full " + bgColorMap["d"+color]}></div>
            <div className={"rounded-r flex flex-wrap h-full flex-grow " + bgColorMap[color]}>

                <div className="flex flex-grow justify-center h-full w- bg-none">
                    <h2 className={"m-4 text-center mt-16 font-bold text-2xl " + bgColorMap["t"+color] }>{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default Book;
