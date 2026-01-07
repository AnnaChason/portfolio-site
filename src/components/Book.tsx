import React, {type ReactNode} from 'react';
import ColorMap from '../style/ColorMap.ts';
import BookSpine from './BookSpine.tsx';

export interface BookProps {
    title: string;
    color: string;
    image: string;
    content: React.ReactNode;
    titlePage?: ReactNode;
}
type BookComponentProps={
    bprops: BookProps;
    onClick: () => void;
};


const Book: React.FC<BookComponentProps> = ({
    bprops,
    onClick,
}) => {
    const title=bprops.title;
    const color=bprops.color;
    const image=bprops.image;

    return (
        <div className={"cursor-pointer"}>
            {/*book cover for larger screens*/}
            <div onClick={onClick} className={"hidden lg:flex bg-white pr-1 pt-1 shadow-md rounded h-[270px] w-48 border-2 border-solid m-3 mb-0 hover:-translate-y-2 " + ColorMap["b" + color]}>
                <div className={"w-4 h-full " + ColorMap["d"+color]}></div>
                <div className={"rounded-r flex  flex-wrap h-full flex-grow bg-cover justify-center content-center " + ColorMap["pc"+color]}>
                    {image != 'none' ? <img className={"w-14 h-14 "} alt="logo" src={image}></img> : <></> }
                    <div className={"w-full h-0 m-0"}></div>
                    <div className="flex flex-grow justify-center items-center bg-none">
                        <h2 className={"m-4 text-center font-bold text-2xl " + ColorMap["t"+color] }>{title}</h2>
                    </div>
                </div>
            </div>
            {/*book spine for smaller ones*/}
            <BookSpine title={title} color={color} onClick={onClick}></BookSpine>
        </div>
    );
};

export default Book;
