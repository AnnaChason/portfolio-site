import type {BookProps} from "./components/Book.tsx";
import python  from './icons/python-language-logotype-svgrepo-com.svg';
import java from './icons/java-logo-svgrepo-com.svg';
import ts from './icons/logo-ts-svgrepo-com.svg';
import js from './icons/logo-js-svgrepo-com.svg';
import firebase from './icons/firebase-1-logo-svgrepo-com.svg'
import reactLogo from './icons/react-logo-programming-svgrepo-com.svg';
import bulletinLogo from './icons/bulletinLogo-yellow.png'
import blanch from './icons/blanchard.svg';
import github from './icons/github-logo-svgrepo-com.svg'
import bookContentPages from "./BookPages.tsx";
import {bookTitlePages} from "./BookPages.tsx";

export const bookList: BookProps[] = [
    //0:education
    {title: "Wheaton College", color:"blue", image: blanch, content:bookContentPages[0], titlePage:bookTitlePages[0]},
    //1-6: programming languages
    {title:"Python", color:"green", image:python, content:"tis a fun language but snakes are scary"},
    {title:"Java", color:"purple", image:java/*update color*/, content:bookContentPages[8], titlePage:bookTitlePages[-1]},
    {title:"C", color:"blue", image:'none'/*get image*/, content:bookContentPages[-1], titlePage:bookTitlePages[-1]},
    {title:"Typescript", color:"yellow", image:'ts', content:bookContentPages[-1], titlePage:bookTitlePages[-1]},
    {title:"Javascript", color:"pink", image:'js', content:bookContentPages[-1], titlePage:bookTitlePages[-1]},
    {title:"SQL", color:"purple", image:'none', content:bookContentPages[-1], titlePage:bookTitlePages[-1]},
    //7-11: technologies/frameworks
    {title:"Git/Github", color:"purple", image:github, content:bookContentPages[7], titlePage:bookTitlePages[7]},
    {title:"Firebase", color:"yellow", image:firebase, content:bookContentPages[-1], titlePage:bookTitlePages[-1]},
    {title:"Supabase", color:"green", image:'none', content:bookContentPages[-1], titlePage:bookTitlePages[-1]},
    {title:"React", color:"blue", image:reactLogo, content:bookContentPages[-1], titlePage:bookTitlePages[-1]},
    {title:"Tailwind", color:"pink", image:'none'/*get image*/, content:bookContentPages[-1], titlePage:bookTitlePages[-1]},
    //12-15: projects
    {title: "Bulletin", color:"yellow", image: bulletinLogo, content:bookContentPages[1], titlePage:bookTitlePages[1]},
    {title: "Flippy", color:"purple", image: 'none', content:bookContentPages[2], titlePage:bookTitlePages[2]},
    {title: "Portfolio Website", color:"green", image: 'none', content:bookContentPages[3], titlePage:bookTitlePages[3]},
    {title: "Proxy Web Server", color:"pink", image: 'none', content:bookContentPages[9], titlePage:bookTitlePages[9]},
    //16-20: work/volunteer experience
    {title: "Discrete Math TA", color:"pink", image: 'none', content:bookContentPages[4], titlePage:bookTitlePages[4]},
    {title: "Lab Assistant", color:"yellow", image: 'none', content:bookContentPages[5], titlePage:bookTitlePages[5]},
    {title: "Little Professor Bookshop", color:"green", image: 'none'/*get image!*/, content:bookContentPages[6], titlePage:bookTitlePages[6]},
    {title: "Diakonoi", color:"blue", image: 'none', content:bookContentPages[11], titlePage:bookTitlePages[11]},
    {title: "Cs Club Cabinet", color:"green", image: 'none', content:bookContentPages[10], titlePage:bookTitlePages[10]},
    //contact 21
   {title:"Get In Touch!", color:"pink", image:'none', content:bookContentPages[12], titlePage:bookTitlePages[12]},
];

export default bookList;