import { useState } from 'react'
import './style/App.css';
import Book from './components/Book.tsx';
import OpenBook from './components/OpenBook.tsx';
import Shelf from './components/Shelf.tsx';
import bookList from './bookList.ts';
import Ducky from "./imgs/Ducky.png";
import DuckyFront from "./imgs/DuckyFront.png";
import DuckyFlower from "./imgs/DuckyWithFlower.png";
import flowerInPot from "./imgs/flowerInPot.png";

const BOOK_SIZES = {
    tall: "h-44",
    normal: "h-40",
    short: "h-36",
};

const fillerBook = (color: string, className?: string) => ({
    title: "",
    color,
    image: "none",
    content: null,
    className,
});


function App() {
    const [openBookId, setOpenBookId] = useState<string | null>(null);

    return (
        <div className="w-screen min-h-screen bg-plaid flex flex-col justify-center gap-0">
            {/* SIGN */}
            <div className="sm:h-[30rem] sm:w-[35rem] w-[20rem] h-[22rem] -translate-y-20 sm:-translate-y-28 self-center p-4 sm:pr-10 sm:pl-10 text-center bg-woodSign bg-cover max-sm:bg-contain max-sm:bg-no-repeat bg-center">
                <h2 className="text-brown-900 sm:translate-y-48 translate-y-[130px] font-bold sm:text-3xl text-md mb-4">
                    Anna Chason Wiggins
                </h2>
                <h3 className="sm:translate-y-48 translate-y-32 sm:text-lg text-xs text-brown-800 font-bold">
                    Hello! I am a computer science major at Wheaton College (IL) from Birmingham, AL. I am passionate about problem solving and developing programs that can help people!
                    <br/><br/>
                    Welcome to my library!
                </h3>
            </div>

            {/* SHELVES */}
            <div className="flex flex-col justify-center -translate-y-24 gap-2">
                <div className={"flex flex-row justify-center"}>
                    <Shelf category={'Education'}>
                        <Book onClick={() => setOpenBookId("Wheaton College")} bprops={bookList[0]}></Book>
                    </Shelf>
                    <Shelf category={'Contact'}><Book onClick={() => setOpenBookId(bookList[21].title)} bprops={bookList[21]} ></Book></Shelf>
                </div>
                <Shelf category={'Programming Languages'}>
                    <Book bprops={bookList[6]} style={"spine"} classname={" !w-12 h-56  rotate-6"}></Book>{/*SQL*/}
                    <Book bprops={bookList[1]} classname={" h-60 w-40 "}></Book>
                    <div className={"flex flex-wrap flex-row justify-center w-72"}>
                        <Book bprops={bookList[2]}  onClick={() => setOpenBookId(bookList[2].title)} classname={"!w-40 !h-56"}></Book>
                        <Book bprops={bookList[3]} style={"spine-side"}></Book>
                    </div>

                    <Book bprops={bookList[4]} style={"spine"} classname={" !h-56"} ></Book>{/*js*/}
                    <Book bprops={bookList[5]} style={"spine"} classname={" !h-64"}></Book>{/*ts*/}
                    <img src={Ducky} alt={"rubber duck"} className={"h-24 -scale-x-[1] translate-x-4"}></img>

                </Shelf>

                <Shelf category={'Technologies and Frameworks'}>
                    <div className={"flex flex-col justify-end items-center"}>
                        <img src={DuckyFront} className={"w-32 translate-y-4"} alt={"rubber duck"}></img>
                        <Book bprops={bookList[11]} style={'spine-side'} classname={" !w-48"}></Book>
                        <Book bprops={bookList[10]} style={'spine-side'} classname={"  h-20"}></Book>{/* make blue*/}
                    </div>
                    <Book onClick={() => setOpenBookId(bookList[7].title)} bprops={bookList[7]}></Book>

                    <Book bprops={bookList[8]} style={"spine"} classname={" -rotate-6"}></Book>
                    <Book  bprops={bookList[9]} style={"spine"} classname={" !w-12 -rotate-12 translate-x-2  -translate-y-1"}></Book>



                </Shelf>
                <Shelf category={'Projects'}>
                    <img src={Ducky} className={"w-36 -scale-x-[1]"} alt={"Rubber Duck"}></img>
                    <Book onClick={() => setOpenBookId(bookList[13].title)} bprops={bookList[13]}  style={"spine"} classname={" !w-12 !h-[230px]"}></Book>
                    <Book onClick={() => setOpenBookId(bookList[14].title)} bprops={bookList[14]} style={"spine"} classname={" !h-52"}></Book>
                    <Book onClick={() => setOpenBookId(bookList[12].title)} bprops={bookList[12]}></Book>
                    <Book onClick={() => setOpenBookId(bookList[15].title)} bprops={bookList[15]} classname={"!w-40 !h-56"} ></Book>
                    <img src={Ducky} className={"w-36 "} alt={"Rubber Duck"}></img>
                </Shelf>
                <Shelf category={'Work and Volunteer Experience'}>
                    <Book onClick={() => setOpenBookId(bookList[18].title)} bprops={bookList[18]} classname={" !h-[240px] w-40"}></Book>
                    <div className={"flex flex-col flex-wrap justify-end items-center"}>
                        <Book onClick={() => setOpenBookId(bookList[20].title)} bprops={bookList[20]} style={"spine-side"} classname={" !w-52"}></Book>
                        <Book onClick={() => setOpenBookId(bookList[16].title)} bprops={bookList[16]} style={"spine-side"} classname={" !w-60 !h-12"}></Book>
                        <Book onClick={() => setOpenBookId(bookList[17].title)} bprops={bookList[17]} style={"spine-side"} classname={" !w-60 !h-20"}></Book>
                    </div>
                    <Book onClick={() => setOpenBookId(bookList[19].title)} bprops={bookList[19]}></Book>{/*DEKES*/}

                    <img src={DuckyFront} className={"w-32 translate-x-4 translate-y-4"} alt={"Rubber Ducky"}></img>
                </Shelf>

            </div>

            {openBookId && (
                <OpenBook
                    {...bookList.find((b) => b.title === openBookId)!}
                    onClick={() => setOpenBookId(null)}
                />
            )}
        </div>
    );
}
export default App;
