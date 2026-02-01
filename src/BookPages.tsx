import type {BookProps} from "./components/Book.tsx";
import python  from './icons/python-language-logotype-svgrepo-com.svg';
import java from './icons/java-logo-svgrepo-com.svg';
import ts from './icons/logo-ts-svgrepo-com.svg';
import js from './icons/logo-js-svgrepo-com.svg';
import blanch from './icons/blanchard.svg'

export const bookTitlePages: React.ReactNode[] = [
    //0:wheaton
    <div>
        <h1 className={"text-3xl sm:text-5xl text-center"}>Wheaton College</h1>
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
    <div className={"text-center"}>
        <h1 className={"font-bold text-xl sm:text-4xl"}>Teaching Assistant</h1>
        <h3 className={"text-xl"}>Jan 2025 - May 2025</h3>
        <h3 className={"text-xl"}>Wheaton, IL</h3>
    </div>,
    /*5:lab assistant*/
    <div className={"ml-3 text-center"}>
        <h1 className={"text-3xl sm:text-5xl font-bold"}>Computer Science Lab Assistant</h1>
        <h3 className={"text-xl"}>Jan 2026 - present</h3>
        <h3 className={"text-xl"}>Wheaton, IL</h3>
    </div>,
    //6:LP
    <div className={"ml-2 text-center"}>
        <h1 className={"text-3xl sm:text-5xl font-bold"}>Little Professor Bookshop</h1>
        <h3 className={"text-xl"}>Nov 2023 - Aug 2024</h3>
        <h3 className={"text-xl"}>Birmingham, AL</h3>

    </div>,
    //7: github
    <div  className={"text-center"}>
        <h1>GitHub</h1>
        <img src="https://ghchart.rshah.org/AnnaChason"/>
    </div>,
    //8: java
    <div  className={"text-center"}>
        <h1>Java</h1>
    </div>,
    //9: proxy lab
    <div className={"text-center"}>
        <h1 className={"text-3xl sm:text-5xl"}>Web Proxy</h1>
        <h3 className={"text-xl"}>Nov & Dec 2025</h3>
    </div>,
    //10: cs cab
    <div className={"text-center"}>
        <h1 className={"text-3xl sm:text-5xl"}>Computer Science Club</h1>
        <h3 className={"text-xl"}>Event Coordinator</h3>
        <h3>Aug 2025 - present</h3>
    </div>,
    //11: Dekes
    <div className={"text-center"}>
        <h1 className={"text-3xl sm:text-5xl"}>Diakonoi</h1>
        <h3 className={"text-xl"}>Campus Host</h3>
        <h3>Aug 2025 - present</h3>
    </div>,
    //12:contact
    <div  className={"text-center"}>
        <h1>Contact Me</h1>
    </div>,
];
export const bookContentPages:React.ReactNode[] = [
   /*0: wheaton*/
    <div>
        <ul className={"ml-4 list-none"}>
            <li className={"font-bold"}>Aug 2024 - Dec 2027(expected)</li>
            <li className={"font-bold"}>BS in Computer Science</li>
            {/* <li className={"font-bold"}>Math minor</li>*/}
            <li><span className={"font-bold"}>GPA:</span> 4.0</li>
            <li><span className={"font-bold"}>Relevant Coursework:</span>
                <ul className={"ml-10 list-disc"}>
                    <li>Software Development</li>
                    <li>Data Structures & Algorithms</li>
                    <li>Computer Systems</li>
                    <li>AI assisted Software Development</li>
                    <li>High Performance Computing</li>
                </ul>
            </li>
        </ul>
    </div>,
    //1: Bulletin
    <div>
        <p>
                Bulletin is a virtual flyer board android app that I built in collaboration with 3 other students as a semester-long class project.
        </p>
        <h3>It was: </h3>
        <ul className={"ml-10"}>
            <li>built with android studio, Java, and firebase</li>
            <li>designed using object-oriented programming principles</li>
            <li>planned using combination of waterfall and agile development methodologies</li>
            <li>coordinated using Github</li>
        </ul>
        <br/>
        <a href={"https://github.com/AnnaChason/Bulletin"} target="_blank" className={"text-blue-400 hover:text-brown-600"}>View on Github</a>
    </div>,
    //2: flippy
    <div>
        <p>Flippy is an interactive flashcard website with multiple study modes including a smart review system to track user progress over time. <br/><br/> Built with:</p>
        <ul className={"ml-10"}>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Supabase</li>
        </ul>
        <br/>
        <a href={"https://github.com/AnnaChason/Flippy"} target="_blank" className={"text-blue-400 hover:text-brown-600"}>View on Github</a>
    </div>,
    //3: this
    <div>
        <p>This project is currently a work in progress, but I’m excited to share it! I decided to have some fun with the design of the site and was inspired by my love of reading. It has been both challenging and rewarding, giving me the chance to strengthen my skills in React and Tailwind especially.</p>
        <br/>
        <p>This website is built with:</p>
        <ul className={"ml-10"}>
            <li>React</li>
            <li>Typescript</li>
            <li>Tailwind</li>
        </ul>
        <br/>
        <a href={"https://github.com/AnnaChason/portfolio-site"} target="_blank" className={"text-blue-400 hover:text-brown-600"}>View on Github</a>
    </div>,
    /*4: DMFP TA*/
   <div className={"mt-3"}>
       <h3>As the TA for Discrete Math and Functional Programming, I:</h3>
      <ul className={"ml-10"}>
          <li>graded weekly homework assignments</li>
          <li>held review sessions before exams</li>
      </ul>
       <br/>
       <p>This experience cemented my understanding of the course topics and grew my communication skills</p>
   </div>,
    /*5: Lab Assistant*/
    <div className={"mt-3"}>
        <p className={"text-lg"}>As a lab assistant, I support fellow students working in Wheaton College’s computer science lab, where CS students collaborate on coursework and projects. I help students debug code, understand concepts, and make progress on assignments for courses I have completed, drawing on my own experience to explain material clearly and effectively.</p>
    </div>,
    /*6: Little professor*/
    <div className={"mt-3"}>
        <h3>As a bookseller at Little Professor, I:</h3>
        <ul className={"ml-10"}>
            <li>Operated the point of sale</li>
            <li>built relationships with customers</li>
            <li>provided book recommendations</li>
            <li>restocked inventory</li>
            <li>maintained organized shelves</li>
        </ul>
        <br/>
        <p>I worked there throughout high school, and often return when I'm home on break.</p>
    </div>,
    /*7: Github*/
    <div>
        <ul className={"ml-5 mt-3"}>
            <li>I am comfortable using GitHub for version control both from the terminal and through IDEs</li>
            <li>I have some experience with collaborative workflows including branching, pull requests, and resolving merge conflicts</li>
            <li>I used GitHub extensively for team development on Bulletin and the Dorm Collective website</li>
        </ul>
        <br/>
        <a href={"https://github.com/AnnaChason"} target="_blank" className={"text-blue-400 hover:text-brown-600"}>View my Github profile</a>
    </div>,
    /*8: java*/
    <div>
        <ul className={"ml-10 mt-3"}>
            <li>I have 3 years of experience using Java</li>
            <li>I am comfortable with object-oriented design principles</li>
            <li>I have experience developing and debugging Java programs in Eclipse</li>
            <li>I Used Java extensively in Bulletin, where I applied OOP concepts to design modular, maintainable code</li>
        </ul>

    </div>,
    /*9: proxy lab*/
    <div>

        <p>I built this web proxy in C which processes HTTP get requests.<br/><br/> It features:</p>
            <ul className={"ml-10"}>
                <li>Concurrent client access</li>
                <li>Caching with a loose LRU replacement policy</li>
                <li>Readers-writers lock for synchronization</li>
            </ul>

    </div>,
    /*10: cs club*/
    <div className={"mt-3"}>
        <p>As the event coordinator of Wheaton's computer science club, I plan and events to foster community and professional development among CS students. To do this, I work closely with the rest of the club cabinet to delegate tasks and ensure the event runs smoothly. <br/><br/>Some events I’ve helped coordinate include a ramen & résumé review night, an internship discussion ice cream social, and a holiday social event.</p>
    </div>,
    //11: dekes
    <div className={"mt-3"}>
        <p>Diakonoi is what Wheaton calls their Campus host programs. As a Diakonoi, I:</p>
        <ul className={"ml-10"}>
            <li>Lead campus tours</li>
            <li>Engage with prospective students and families</li>
            <li>Host prospective students overnight</li>
            <li>Help with large visit events</li>
        </ul>
    </div>,
    //12: contact
    <div className={"content-center"}>
        <ul className={"ml-2 list-none space-y-4"}>
            <li><span className={"font-bold"} >Email: </span>chasonwiggins@gmail.com</li>
            <li><span className={"font-bold"} >Phone: </span>(205)-305-2964</li>
            <li> <a href={"https://github.com/AnnaChason"} target="_blank" className={"text-blue-400 hover:text-brown-600"}>Github profile</a></li>
            <li> <a href={"https://www.linkedin.com/in/anna-wiggins-96419a320"} target="_blank"  className={"text-blue-400 hover:text-brown-600"}>LinkedIn profile</a></li>
            <li> <a href={"https://www.goodreads.com/user/show/98177448-anna-chason-wiggins"} target={"_blank"} className={"text-blue-400 hover:text-brown-600"}>Find me on Goodreads for book recommendations!</a></li>
        </ul>
    </div>
];
export default bookContentPages;