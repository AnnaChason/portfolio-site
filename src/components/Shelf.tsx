import React from 'react';
import Book from './Book';
import BookSpine from './BookSpine';
import python  from '../../public/icons/python-language-logotype-svgrepo-com.svg';
import java from '../../public/icons/java-logo-svgrepo-com.svg';
import ts from '../../public/icons/logo-ts-svgrepo-com.svg';
import js from '../../public/icons/logo-js-svgrepo-com.svg';

interface OpenBookProps {
    title: string;
    content: string;
    color: string;
}

const Shelf: React.FC = () => {
    return (
        <div className="flex flex-wrap justify-center p-4">
            <div className={" max-w-screen-lg flex flex-wrap justify-center"}>
                <Book title={"Python"} color={"green"} image={python}></Book>
                <Book title={"Typescript"} color={"yellow"} image={ts}></Book>
                <Book title={"Java"} color={"blue"} image={java}></Book>
                <Book title={"Javascript"} color={"pink"} image={js}></Book>
                <div className={" w-full h-8 rounded bg-woodTexture mb-5 border border-brown-400 "}></div>
            </div>
        </div>
    );

}
export default Shelf;