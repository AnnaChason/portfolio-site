import { useState } from 'react'
import './style/App.css';
import Book from './components/Book.tsx';
import OpenBook from './components/OpenBook.tsx';
import Shelf from './components/Shelf.tsx';
import Sign from '../public/woodSign.webp';
import python  from './icons/python-language-logotype-svgrepo-com.svg';
import java from './icons/java-logo-svgrepo-com.svg';
import ts from './icons/logo-ts-svgrepo-com.svg';
import js from './icons/logo-js-svgrepo-com.svg';
import blanch from './icons/blanchard.svg'
import type {BookProps} from "./components/Book.tsx";

const books: BookProps[] = [
    {title: "Wheaton College", content: "Sophmore computer science major and math minor", color:"blue", image: blanch},
    {title:"Python", color:"green", image:python, content:"tis a fun language but snakes are scary"},
    {title:"Typescript", color:"yellow", image:ts, content:"hello world"},
];

function App() {
    const [openBookId, setOpenBookId] = useState<string | null>(null);

  return (
    <div className={"w-screen min-h-screen bg-green-400 flex flex-col justify-center gap-0"}>
        <div className="sm:h-[30rem] sm:w-[35rem] w-[20rem] h-[22rem] -translate-y-20 sm:-translate-y-28 self-center p-4 sm:pr-10 sm:pl-10 text-center bg-woodSign bg-cover max-sm:bg-contain max-sm:bg-no-repeat bg-center ">
            <h2 className={"text-brown-900 sm:translate-y-48 translate-y-[130px] font-bold sm:text-3xl text-md mb-4 "}>Anna Chason Wiggins</h2>
            <h3 className={" sm:translate-y-48 translate-y-32 sm:text-lg text-xs text-brown-800 font-bold "}>Hello! I am a sophmore computer science major at Wheaton College (IL). I am from Birmingham AL, and I love programming, problem solving, and people. <br/><br/> Welcome to my library!  </h3>
        </div>
        <div className="flex flex-col justify-center -translate-y-24">
            <Shelf category={'education'}><Book onClick={() => setOpenBookId("Wheaton College")} title={'Wheaton College'} color={'blue'} image={blanch} content={""}></Book></Shelf>
            <Shelf category={'programming languages'}>
                <Book onClick={() => setOpenBookId("Python")} title={"Python"} color={"green"} image={python} content={""}></Book>
                <Book onClick={() => setOpenBookId("Typescript")} title={"Typescript"} color={"yellow"} image={ts} content={""}></Book>
                <Book onClick={() => setOpenBookId("Java")} title={"Java"} color={"blue"} image={java} content={""}></Book>
                <Book onClick={() => setOpenBookId("Javascript")} title={"Javascript"} color={"pink"} image={js} content={""}></Book>
            </Shelf>
        </div>
        {openBookId && (
            <OpenBook{...books.find((b) => b.title === openBookId)!}  onClick={() => setOpenBookId(null)}/>
        )}
    </div>
  );
}

export default App;
