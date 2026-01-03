import React from 'react';


const bgColorMap: Record<string, string> = {
    blue: "bg-blue-400",
    red: "bg-red-400",
    green: "bg-green-400",
    yellow: "bg-yellow-400",
    purple: "bg-purple-400",
    orange: "bg-orange-400",

    dblue: "bg-blue-900",
    dred: "bg-red-900",
    dgreen: "bg-green-900",
    dyellow: "bg-yellow-700",
    dpurple: "bg-purple-900",
    dorange: "bg-orange-900",

    tblue: "text-blue-900",
    tred: "text-red-900",
    tgreen: "text-green-900",
    tyellow: "text-yellow-700",
    tpurple: "text-purple-900",
    torange: "text-orange-900",

    bblue: "border-blue-900",
    bred: "border-red-900",
    bgreen: "border-green-900",
    byellow: "border-yellow-700",
    bpurple: "border-purple-900",
    borange: "border-orange-900"
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
        <div className={"bg-white flex pr-1 pt-1 shadow-md rounded h-96 w-72 border-2 border-solid m-1 " + bgColorMap["b" + color]}>
            <div className={"w-5 h-full " + bgColorMap["d"+color]}></div>
            <div className={"rounded-r flex flex-wrap h-full flex-grow " + bgColorMap[color]}>

                <div className="flex flex-grow justify-center h-full w- bg-none">
                    <h2 className={"m-4 text-center mt-16 font-bold text-xl " + bgColorMap["t"+color] }>{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default Book;
