//import { useState } from 'react'
import './style/App.css';
import Book from './components/Book.tsx';
import OpenBook from './components/OpenBook.tsx';
import Shelf from './components/Shelf.tsx';
import Sign from '../public/woodSign.webp';


function App() {

  return (
    <div className={"w-full h-full bg-green-400 flex flex-col justify-center gap-0"}>
        <div className="h-[30rem] w-[35rem] -translate-y-28 self-center bg-woodSign bg-cover pr-10 pl-10">
            <h2 className={"text-brown-900 translate-y-60 font-bold text-3xl mb-4 "}>Anna Chason Wiggins</h2>
            <h3 className={"translate-y-60 text-lg text-brown-800 font-bold "}>Hello! I am a sophmore computer science major at Wheaton College (IL). I am from Birmingham AL, and I love programming, problem solving, and people. <br/><br/> Welcome to my library!  </h3>
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
