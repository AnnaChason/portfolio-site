import React from 'react';
import Book from './Book';

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
                <Book title={"Peter Pan"} color={"blue"}></Book>
                <Book title={"Harry potter and the goblet of fire"} color={"yellow"}></Book>
                <div className={"max-w-screen-lg w-screen h-8 rounded bg-brown-400 mb-5"}></div>
            </div>
        </div>
    );

}
export default Shelf;