import React from 'react';

interface OpenBookProps {
    title: string;
    content: string;
    color: string;
}
const OpenBook: React.FC<OpenBookProps> = (
    {title, content, color}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center drop-shadow-lg">
        <div className="flex m-1">
            <div className={"rounded-l flex justify-center h-96 w-72 p-3 pr-0 bg-" + color +"-400 "}>
                <div className={"bg-amber-50 w-full h-full flex items-center justify-center "}>
                    <h1 className={"text-stone-800 font-bold"}>{title}</h1>
                </div>
            </div>
            <div className={" flex justify-center h-96 pt-3 pb-3 w-5 bg-" + color +"-900 "}>
                <div className={"w-full h-full bg-gradient-to-r from-amber-50 to-stone-300"}></div>
                <div className={"w-full h-full bg-gradient-to-l from-amber-50 to-stone-300"}></div>
            </div>
            <div className={"rounded-r flex justify-center h-96 w-72 p-3 pl-0 bg-" + color +"-400 "}>
                <div className={"bg-amber-50 w-full h-full p-3 flex justify-start"}>
                    <p className={"text-stone-800"}>{content}</p>
                </div>
            </div>
        </div>
        </div>
    );
}
export default OpenBook;