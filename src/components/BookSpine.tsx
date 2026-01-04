import React from "react";

import ColorMap from '../style/ColorMap.ts'

interface BookProps {
    title: string;
    color: string;
}

const BookSpine: React.FC<BookProps> = ({title, color}) => {
    return (
        <div className={"h-64 w-8 mb-0 " + ColorMap[color]}>
            {title}
        </div>
    );
}

export default BookSpine;