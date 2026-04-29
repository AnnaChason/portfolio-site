import { useState } from 'react';
import '../style/App.css';
import Book from '../components/Book.tsx';
import OpenBook from '../components/OpenBook.tsx';
import Shelf from '../components/Shelf.tsx';
import { book, bookList } from '../books';
import Ducky from '../imgs/Ducky.png';
import DuckyFront from '../imgs/DuckyFront.png';

function LibraryPage() {
    const [openBookId, setOpenBookId] = useState<string | null>(null);

    return (
        <div className="w-screen min-h-screen bg-plaid flex flex-col justify-center gap-0 sm:overflow-hidden overflow-x-scroll">
            {/* SIGN */}
            <div className="sm:h-[30rem] sm:w-[35rem] w-[20rem] h-[22rem] -translate-y-20 sm:-translate-y-28 self-center p-4 sm:pr-10 sm:pl-10 text-center bg-woodSign bg-cover max-sm:bg-contain max-sm:bg-no-repeat bg-center">
                <h2 className="text-brown-900 sm:translate-y-48 translate-y-[130px] font-bold sm:text-3xl text-md mb-4">
                    Anna Chason Wiggins
                </h2>
                <h3 className="sm:translate-y-48 translate-y-32 sm:text-lg text-xs text-brown-800 font-bold">
                    Hello! I am a computer science major at Wheaton College (IL) from Birmingham, AL.
                    <br />
                    <br />
                    Welcome to my library!
                </h3>
            </div>

            {/* SHELVES */}
            <div className="flex flex-col justify-center -translate-y-24 gap-2">
                <div className={'flex flex-row justify-center'}>
                    <Shelf category={'Education'}>
                        <Book onClick={() => setOpenBookId(book('wheatonCollege').title)} bprops={book('wheatonCollege')}></Book>
                    </Shelf>
                    <Shelf category={'Contact'}>
                        <Book onClick={() => setOpenBookId(book('contact').title)} bprops={book('contact')}></Book>
                    </Shelf>
                </div>
                <Shelf category={'Programming Languages'}>
                    <Book bprops={book('sql')} style={'spine'} classname={' !w-12 h-56  rotate-6'}></Book>
                    <Book bprops={book('python')} classname={' h-60 w-40 '}></Book>
                    <div className={'flex flex-wrap flex-row justify-center lg:w-72'}>
                        <Book bprops={book('java')} onClick={() => setOpenBookId(book('java').title)} classname={'!w-40 !h-56'}></Book>
                        <Book bprops={book('cLanguage')} style={'spine-side'}></Book>
                    </div>

                    <Book bprops={book('typescript')} style={'spine'} classname={' !h-56'}></Book>
                    <div className={'hidden sm:block'}>
                        <Book bprops={book('javascript')} style={'spine'} classname={' !h-64'}></Book>
                    </div>
                    <img src={Ducky} alt={'rubber duck'} className={'h-24 -scale-x-[1] translate-x-4 hidden md:block'}></img>
                </Shelf>

                <Shelf category={'Technologies and Frameworks'}>
                    <div className={'flex lg:flex-col justify-end items-center'}>
                        <img src={DuckyFront} className={'w-32 translate-y-4 hidden lg:block'} alt={'rubber duck'}></img>
                        <Book bprops={book('tailwind')} style={'spine-side'} classname={' !w-48'}></Book>
                        <Book bprops={book('react')} style={'spine-side'} classname={'  h-20'}></Book>
                    </div>
                    <Book onClick={() => setOpenBookId(book('gitGithub').title)} bprops={book('gitGithub')}></Book>
                    <Book bprops={book('firebase')} style={'spine'} classname={' -rotate-6'}></Book>
                    <Book bprops={book('supabase')} style={'spine'} classname={' !w-12 -rotate-12 translate-x-2  -translate-y-1'}></Book>
                </Shelf>
                <Shelf category={'Projects'}>
                    <img src={Ducky} className={'w-36 -scale-x-[1] hidden md:block'} alt={'Rubber Duck'}></img>
                    <Book onClick={() => setOpenBookId(book('flippy').title)} bprops={book('flippy')} style={'spine'} classname={' !w-12 !h-[230px]'}></Book>
                    <Book
                        onClick={() => setOpenBookId(book('portfolioWebsite').title)}
                        bprops={book('portfolioWebsite')}
                        style={'spine'}
                        classname={' !h-52'}
                    ></Book>
                    <Book
                        onClick={() => setOpenBookId(book('proxyWebServer').title)}
                        bprops={book('proxyWebServer')}
                        style={'spine'}
                        classname={' !w-12 !h-[220px] -rotate-3'}
                    ></Book>
                    <Book onClick={() => setOpenBookId(book('bulletin').title)} bprops={book('bulletin')}></Book>
                    <Book onClick={() => setOpenBookId(book('csHub').title)} bprops={book('csHub')} classname={'!w-40 !h-56'}></Book>
                    <img src={Ducky} className={'w-36 hidden md:block'} alt={'Rubber Duck'}></img>
                </Shelf>
                <Shelf category={'Work/Volunteer Experience'}>
                    <Book
                        onClick={() => setOpenBookId(book('littleProfessor').title)}
                        bprops={book('littleProfessor')}
                        classname={' !h-[240px] w-40'}
                    ></Book>
                    <div className={'flex flex-row-reverse lg:flex-col flex-wrap justify-end items-center'}>
                        <Book
                            onClick={() => setOpenBookId(book('csClubCabinet').title)}
                            bprops={book('csClubCabinet')}
                            style={'spine-side'}
                            classname={' !w-52'}
                        ></Book>
                        <Book
                            onClick={() => setOpenBookId(book('discreteMathTa').title)}
                            bprops={book('discreteMathTa')}
                            style={'spine-side'}
                            classname={' !w-60 !h-12'}
                        ></Book>
                        <Book
                            onClick={() => setOpenBookId(book('labAssistant').title)}
                            bprops={book('labAssistant')}
                            style={'spine-side'}
                            classname={' !w-60 !h-20'}
                        ></Book>
                    </div>
                    <Book onClick={() => setOpenBookId(book('diakonoi').title)} bprops={book('diakonoi')}></Book>

                    <img src={DuckyFront} className={'w-32 translate-x-4 translate-y-4 hidden md:block'} alt={'Rubber Ducky'}></img>
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

export default LibraryPage;
