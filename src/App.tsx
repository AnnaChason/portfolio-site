import { useState } from 'react'
import './style/App.css';
import Book from './components/Book.tsx';
import OpenBook from './components/OpenBook.tsx';
import Shelf from './components/Shelf.tsx';
import BookSpine from './components/BookSpine.tsx';
import bookList from './bookList.ts'



function App() {
    const [openBookId, setOpenBookId] = useState<string | null>(null);

  return (
    <div className={"w-screen min-h-screen bg-plaid flex flex-col justify-center gap-0"}>
        <div className="sm:h-[30rem] sm:w-[35rem] w-[20rem] h-[22rem] -translate-y-20 sm:-translate-y-28 self-center p-4 sm:pr-10 sm:pl-10 text-center bg-woodSign bg-cover max-sm:bg-contain max-sm:bg-no-repeat bg-center ">
            <h2 className={"text-brown-900 sm:translate-y-48 translate-y-[130px] font-bold sm:text-3xl text-md mb-4"}>Anna Chason Wiggins</h2>
            <h3 className={" sm:translate-y-48 translate-y-32 sm:text-lg text-xs text-brown-800 font-bold "}>Hello! I am a sophmore computer science major at Wheaton College (IL). I am from Birmingham AL, and I love programming, problem solving, and people. <br/><br/> Welcome to my library!  </h3>
        </div>
        <div className="flex flex-col justify-center -translate-y-24">
            <div className={"flex flex-row justify-center"}>
                <Shelf category={'Education'}><Book onClick={() => setOpenBookId("Wheaton College")} bprops={bookList[0]}></Book></Shelf>
                <Shelf category={'Contact'}><Book onClick={() => setOpenBookId(bookList[14].title)} bprops={bookList[14]}></Book></Shelf>
            </div>
            <Shelf category={'Programming Languages'}>
                <Book bprops={bookList[1]}></Book>
                <Book bprops={bookList[2]}></Book>
                <Book bprops={bookList[3]}></Book>

            </Shelf>
            <Shelf category={'Technologies and Frameworks'}>
                <Book onClick={() => setOpenBookId(bookList[4].title)} bprops={bookList[4]}></Book>
                <Book onClick={() => setOpenBookId(bookList[5].title)} bprops={bookList[5]}></Book>
                <Book onClick={() => setOpenBookId(bookList[6].title)} bprops={bookList[6]}></Book>
                <div className={"flex flex-col justify-end items-center w-3"}>
                <Book onClick={() => setOpenBookId(bookList[7].title)} bprops={bookList[7]} style={'spine-side'}></Book>
                <Book onClick={() => setOpenBookId(bookList[7].title)} bprops={bookList[8]} style={'spine-side'}></Book>
                <Book onClick={() => setOpenBookId(bookList[7].title)} bprops={bookList[9]} style={'spine-side'}></Book>
                </div>

            </Shelf>
            <Shelf category={'Projects'}>
                <Book onClick={() => setOpenBookId(bookList[8].title)} bprops={bookList[8]}></Book>
                <Book onClick={() => setOpenBookId(bookList[9].title)} bprops={bookList[9]}></Book>
                <Book onClick={() => setOpenBookId(bookList[10].title)} bprops={bookList[10]}></Book>
            </Shelf>
            <Shelf category={'Work Experience'}>
                <Book onClick={() => setOpenBookId(bookList[11].title)} bprops={bookList[11]}></Book>
                <Book onClick={() => setOpenBookId(bookList[12].title)} bprops={bookList[12]}></Book>
                <Book onClick={() => setOpenBookId(bookList[13].title)} bprops={bookList[13]}></Book>
            </Shelf>

        </div>
        {openBookId && (
            <OpenBook{...bookList.find((b) => b.title === openBookId)!}  onClick={() => setOpenBookId(null)}/>
        )}
    </div>
  );
}

export default App;
