import React from "react";
import type {BookProps} from './Book.tsx'
import ColorMap from '../style/ColorMap.ts'

type bookSpineProps= {
    bprops: BookProps;
    onClick?: () => void;
    style?: string;
}

const BookSpine: React.FC<bookSpineProps> = ({bprops, onClick, style}) => {
    const title = bprops.title;
    const color = bprops.color;
    const className = bprops.className;
    return (
        <div onClick={onClick} className={(style == 'hidden' ? 'lg:hidden ' : '') + "relative flex flex-col h-[270px] w-16 rounded-sm m-2 mt-3 mb-0 justify-center items-center " + (onClick ? " hover:-translate-y-2 "  + ColorMap["ps"+color] : ColorMap["d"+ color]) +" "+ className } style={{backgroundSize:'100% 100%'}}>
            <h2 className={"absolute inset-0 flex items-center justify-center rotate-90 font-bold text-xl whitespace-nowrap overflow-visible " + (onClick ? ColorMap["t"+color] : ColorMap["dt"+color])}>{title}</h2>
        </div>
    );
}

export const BookSpineSide: React.FC<bookSpineProps> = ({bprops, onClick}) => {
    const title = bprops.title;
    const color = bprops.color;
    const className = bprops.className;
    return (
        <div  onClick={onClick} className={"relative flex flex-col h-16 w-[270px] rounded-md m-2 mt-0 mb-0 justify-center items-center bg-no-repeat bg-center " + (onClick ? " hover:-translate-y-2 "+ ColorMap["pss"+color]: ColorMap["d" + color]) + " " + className}  style={{backgroundSize:'100% 100%'}}>
            <h2 className={"absolute inset-0 flex items-center justify-center font-bold text-xl whitespace-nowrap " + (onClick ? ColorMap["t"+color] : ColorMap["dt" + color])}>{title}</h2>
        </div>
    );
}

export default BookSpine;