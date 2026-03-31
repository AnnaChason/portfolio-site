import type { BookProps } from '../components/Book.tsx';
import python from '../icons/python-language-logotype-svgrepo-com.svg';
import java from '../icons/java-logo-svgrepo-com.svg';
import ts from '../icons/logo-ts-svgrepo-com.svg';
import js from '../icons/logo-js-svgrepo-com.svg';
import firebase from '../icons/firebase-1-logo-svgrepo-com.svg';
import reactLogo from '../icons/react-logo-programming-svgrepo-com.svg';
import bulletinLogo from '../icons/bulletinLogo-yellow.png';
import blanch from '../icons/blanchard.svg';
import github from '../icons/github-logo-svgrepo-com.svg';
import { BOOK_ORDER, type BookId } from './ids';
import { bookPages } from './pages';

function pickPages(id: BookId): Pick<BookProps, 'content' | 'titlePage'> {
    const p = bookPages[id];
    if (!p) {
        return {};
    }
    return {
        content: p.content,
        ...(p.titlePage !== undefined ? { titlePage: p.titlePage } : {}),
    };
}

/** All book data keyed by stable id (covers, colors, modal content). */
export const BOOKS: Record<BookId, BookProps> = {
    wheatonCollege: {
        title: 'Wheaton College',
        color: 'blue',
        image: blanch,
        ...pickPages('wheatonCollege'),
    },
    python: {
        title: 'Python',
        color: 'green',
        image: python,
        content: 'tis a fun language but snakes are scary',
    },
    java: {
        title: 'Java',
        color: 'purple',
        image: java,
        ...pickPages('java'),
    },
    cLanguage: {
        title: 'C',
        color: 'blue',
        image: 'none',
    },
    typescript: {
        title: 'Typescript',
        color: 'yellow',
        image: 'ts',
    },
    javascript: {
        title: 'Javascript',
        color: 'pink',
        image: 'js',
    },
    sql: {
        title: 'SQL',
        color: 'purple',
        image: 'none',
    },
    gitGithub: {
        title: 'Git/Github',
        color: 'purple',
        image: github,
        ...pickPages('gitGithub'),
    },
    firebase: {
        title: 'Firebase',
        color: 'yellow',
        image: firebase,
    },
    supabase: {
        title: 'Supabase',
        color: 'green',
        image: 'none',
    },
    react: {
        title: 'React',
        color: 'blue',
        image: reactLogo,
    },
    tailwind: {
        title: 'Tailwind',
        color: 'pink',
        image: 'none',
    },
    bulletin: {
        title: 'Bulletin',
        color: 'yellow',
        image: bulletinLogo,
        ...pickPages('bulletin'),
    },
    flippy: {
        title: 'Flippy',
        color: 'purple',
        image: 'none',
        ...pickPages('flippy'),
    },
    portfolioWebsite: {
        title: 'Portfolio Website',
        color: 'green',
        image: 'none',
        ...pickPages('portfolioWebsite'),
    },
    csHub: {
        title: 'CS Hub',
        color: 'blue',
        image: 'none',
        ...pickPages('csHub'),
    },
    proxyWebServer: {
        title: 'Proxy Web Server',
        color: 'pink',
        image: 'none',
        ...pickPages('proxyWebServer'),
    },
    discreteMathTa: {
        title: 'Discrete Math TA',
        color: 'pink',
        image: 'none',
        ...pickPages('discreteMathTa'),
    },
    labAssistant: {
        title: 'Lab Assistant',
        color: 'yellow',
        image: 'none',
        ...pickPages('labAssistant'),
    },
    littleProfessor: {
        title: 'Little Professor Bookshop',
        color: 'green',
        image: 'none',
        ...pickPages('littleProfessor'),
    },
    diakonoi: {
        title: 'Diakonoi',
        color: 'blue',
        image: 'none',
        ...pickPages('diakonoi'),
    },
    csClubCabinet: {
        title: 'Cs Club Cabinet',
        color: 'green',
        image: 'none',
        ...pickPages('csClubCabinet'),
    },
    contact: {
        title: 'Get In Touch!',
        color: 'pink',
        image: 'none',
        ...pickPages('contact'),
    },
};

export function book(id: BookId): BookProps {
    return BOOKS[id];
}

/** Same order as before the refactor (array index compatibility / iteration). */
export const bookList: BookProps[] = BOOK_ORDER.map((id) => BOOKS[id]);
