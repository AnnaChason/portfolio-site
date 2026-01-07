import type {BookProps} from "./components/Book.tsx";
import python  from './icons/python-language-logotype-svgrepo-com.svg';
import java from './icons/java-logo-svgrepo-com.svg';
import ts from './icons/logo-ts-svgrepo-com.svg';
import js from './icons/logo-js-svgrepo-com.svg';
import blanch from './icons/blanchard.svg'

export const bookTitlePages: React.ReactNode[] = [
    //0:wheaton
    <div>
        <h1 className={"text-3xl sm:text-5xl"}>Wheaton College</h1>
        <h3 className={"text-xl"}>(Wheaton,IL)</h3>
    </div>,
    //1:Bulletin
    <div className={"text-center"}>
        <h1 className={"text-3xl sm:text-5xl"}>Bulletin</h1>
        <h3 className={"text-xl"}>Jan 2025 - May 2025</h3>
    </div>,
    //2:Flippy
    <div className={"text-center"}>
        <h1 className={"text-3xl sm:text-5xl"}>Flippy</h1>
        <h3 className={"text-xl"}>Jun 2025 - Aug 2025</h3>
    </div>,
    //3: this project
    <div className={"text-center"}>
        <h1 className={"text-3xl sm:text-5xl"}>Portfolio Site</h1>
        <h3 className={"text-xl"}>Dec 2025 - Jan 2026</h3>
    </div>,
    /*4:DMFP TA*/
    <div className={""}>
        <h1 className={"font-bold text-xl sm:text-4xl"}>Teaching Assistant for Discrete Mathematics and Functional Programming</h1>
        <h3 className={"text-xl"}>Jan 2025 - May 2025</h3>
        <h3 className={"text-xl"}>Wheaton, IL</h3>
    </div>,
    /*5:lab assistant*/
    <div className={""}>
        <h1 className={"text-3xl sm:text-5xl font-bold"}>Computer Science Lab Assistant</h1>
        <h3 className={"text-xl"}>Jan 2026 - present</h3>
        <h3 className={"text-xl"}>Wheaton, IL</h3>
    </div>,
    //6:LP
    <div>
        <h1 className={"text-3xl sm:text-5xl font-bold"}>Little Professor Bookshop</h1>
        <h3 className={"text-xl"}>Nov 2023 - Aug 2024</h3>
        <h3 className={"text-xl"}>Birmingham, AL</h3>

    </div>,

];
export const bookContentPages:React.ReactNode[] = [
   /*wheaton*/
    <div>
        <ul>
            <li className={"font-bold"}>Aug 2024 - May 2028(expected)</li>
            <li className={"font-bold"}>BS in Computer Science</li>
            <li className={"font-bold"}>Math minor (anticipated)</li>
            <li><span className={"font-bold"}>Class Standing:</span> Sophmore</li>
            <li><span className={"font-bold"}>GPA:</span> 4.0</li>
            <li><span className={"font-bold"}>Relevant Coursework:</span> Software Development, Data Structures & Algorithms, Computer Systems</li>
        </ul>
    </div>,
    //Bulletin
    <div>
        <p>
                Bulletin is a virtual flyer board android app that I built in collaboration with 3 other students as a semester-long class project. I led our team of 4, organizing meeting times, delegating tasks, and keeping us on schedule.
        </p>
        <ul>
            <li>built with android studio, Java, and firebase</li>
            <li>designed using object-oriented programming principles</li>
            <li>planned using combination of waterfall and agile development methodologies</li>
            <li>coordinated using Github</li>
        </ul>
        <a href={"https://github.com/AnnaChason/Bulletin"} className={"text-brown-900 hover:text-brown-600"}>View on Github</a>
    </div>,
    //flippy
    <div>
        <p>Flippy is an interactive flashcard website with multiple study modes including a smart review system to track user progress over time. I built it as an exercise to learn html, css, and javascript. It also uses Supabase as the database.</p>
        <a href={"https://github.com/AnnaChason/Flippy"} className={"text-brown-900 hover:text-brown-600"}>View on Github</a>
    </div>,
    //this
    <div>
        <p>This website is built with:</p>
        <ul>
            <li>React</li>
            <li>Typescript</li>
            <li>Tailwind</li>
        </ul>
    </div>,
    /*DMFP TA*/
   <div>
      <p className={"text-lg"}>As a teaching assistant, I graded weekly homework assignments and held review sessions before exams. This cemented my understanding of discrete math and functional programming topics and grew my communication skills.</p>
   </div>,
    /*Lab Assistant*/
    <div>
        <p className={"text-lg"}>As a lab assistant, I help fellow students on projects and assignments for numerous computer science classes.</p>
    </div>,
    /*Little professor*/
    <div>
        <p className={"text-lg"}>
            At Little Professor, I Operated the point of sale, built relationships with customers, provided book recommendations, restocked inventory, and maintained organized shelves. I worked there throughout high school, and often return when I'm home on break.
        </p>.
    </div>,
];
export default bookContentPages;