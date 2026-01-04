//import { useState } from 'react'
import './App.css';
import Book from './components/Book.tsx';
import OpenBook from './components/OpenBook.tsx';
import Shelf from './components/Shelf.tsx';
import Sign from './imgs/woodSign.webp';


function App() {

  return (
    <div className={"w-full h-full bg-green-400 flex flex-col justify-center"}>
        <img src={Sign} alt="wooden sign" className="h-[30rem] w-[30rem] -translate-y-20 self-center" />
        <div className="flex flex-col justify-center">
            <Shelf></Shelf>
            <Shelf></Shelf>
            <Shelf></Shelf>
        </div>


    </div>
  );
}

export default App;
