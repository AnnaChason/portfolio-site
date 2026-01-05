import React from 'react';
import Book from './Book';
import BookSpine from './BookSpine';


interface OpenBookProps {
    title: string;
    content: string;
    color: string;
}

const Shelf: React.FC = () => {
    return (
        <div className="flex flex-wrap justify-center p-4">
            <div className={" max-w-screen-lg flex flex-wrap justify-center"}>
                <Book title={"The Secret Garden"} color={"green"}></Book>
                <Book title={"The Little Princess"} color={"pink"}></Book>
                <Book title={"Peter Pan"} color={"yellow"}></Book>
                <Book title={"Harry potter and the goblet of fire"} color={"blue"}></Book>
                <BookSpine title={"great gatsby"} color={"pink"}></BookSpine>
                <BookSpine title={"great gatsby"} color={"yellow"} ></BookSpine>
                <div className={" w-full h-8 rounded bg-woodTexture mb-5 border border-brown-400 "}></div>
            </div>
        </div>
    );

}
export default Shelf;