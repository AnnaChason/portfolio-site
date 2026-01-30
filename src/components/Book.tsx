import React, {type ReactNode} from 'react';
import ColorMap from '../style/ColorMap.ts';
import BookSpine from './BookSpine.tsx';
import {BookSpineSide} from './BookSpine.tsx';

export interface BookProps {
    title: string;
    color: string;
    image: string;
    content: React.ReactNode;
    className?: string;
    titlePage?: ReactNode;
}
type BookComponentProps={
    bprops: BookProps;
    style?: string;
    classname?: string;
    onClick?: () => void;
};


const Book: React.FC<BookComponentProps> = ({
    bprops,
    onClick,
    classname,
    style,
}) => {
    const title=bprops.title;
    const color = bprops.color;
    const image=bprops.image;
    if(bprops.className){
        if(classname){
            classname += ' '+bprops.className;
        }
        else{
            classname = bprops.className;
        }
    }


    if(style == 'spine-side'){
      return(
          <div className={onClick ? "cursor-pointer" : ""}>
            <BookSpineSide bprops={bprops} onClick={onClick} style={'idk'} classname={classname + " hidden lg:flex "}></BookSpineSide>
              {/*upright spine for smaller ones*/}
              <BookSpine bprops={bprops} onClick={onClick} style={'hidden'}></BookSpine>
          </div>
      );
    }
    else if(style == 'spine'){
        return(
            <div className={onClick ? "cursor-pointer" : ""}>
            <BookSpine bprops={bprops} onClick={onClick} style={'hi'} classname={classname}></BookSpine>
            </div>
        );
    }
    else {
        return (
            <div className={onClick ? "cursor-pointer" : ""}>
                {/*book cover for larger screens*/}
                <div onClick={onClick}
                     className={"hidden lg:flex bg-white pr-1 pt-1 shadow-md rounded h-[270px] w-48 border-2 border-solid m-3 mb-0 "+(onClick ?  " hover:-translate-y-2 " + ColorMap["b" + color]: ColorMap["b" + color]) +"  "+ classname}>
                    <div className={"w-4 h-full " + ColorMap["d" + color]}></div>
                    <div className={"rounded-r flex  flex-wrap h-full flex-grow justify-center content-center bg-no-repeat  " + ColorMap["pc" + color] + (onClick ? "" : " bg-black/25 bg-blend-multiply ")} style={{backgroundSize:'100% 100%'}}>
                        {image != 'none' ? <img className={"w-14 h-14 "} alt="logo" src={image}></img> : <></>}
                        <div className={"w-full h-0 m-0"}></div>
                        <div className="flex flex-grow justify-center items-center bg-none">
                            <h2 className={"m-4 text-center font-bold text-2xl " + ColorMap["t" + color]}>{title}</h2>
                        </div>
                    </div>
                </div>
                {/*book spine for smaller ones*/}
                <BookSpine bprops={bprops} onClick={onClick} style={'hidden'}></BookSpine>
            </div>
        );
    }
};

export default Book;
