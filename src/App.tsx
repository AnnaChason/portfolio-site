//import { useState } from 'react'
import './style/App.css';
import Book from './components/Book.tsx';
import OpenBook from './components/OpenBook.tsx';
import Shelf from './components/Shelf.tsx';
import Sign from '../public/woodSign.webp';


function App() {

  return (
    <div className={"w-screen min-h-screen bg-green-400 flex flex-col justify-center gap-0"}>
        <div className="sm:h-[30rem] sm:w-[35rem] w-[20rem] h-[22rem] -translate-y-20 sm:-translate-y-28 self-center p-4 sm:pr-10 sm:pl-10 text-center bg-woodSign bg-cover max-sm:bg-contain max-sm:bg-no-repeat bg-center ">
            <h2 className={"text-brown-900 sm:translate-y-48 translate-y-[130px] font-bold sm:text-3xl text-md mb-4 "}>Anna Chason Wiggins</h2>
            <h3 className={" sm:translate-y-48 translate-y-32 sm:text-lg text-xs text-brown-800 font-bold "}>Hello! I am a sophmore computer science major at Wheaton College (IL). I am from Birmingham AL, and I love programming, problem solving, and people. <br/><br/> Welcome to my library!  </h3>
        </div>
        <div className="flex flex-col justify-center -translate-y-24">
            <Shelf></Shelf>
            <Shelf></Shelf>
            <Shelf></Shelf>
        </div>


    </div>
  );
}

export default App;
