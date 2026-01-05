import React from 'react';

type ShelfProps = {
    children: React.ReactNode;
    category: string;
};

const Shelf: React.FC<ShelfProps> = ({children, category}) => {
    return (
        <div className="flex flex-wrap justify-center p-4">
            <div className={" max-w-screen-lg flex flex-wrap justify-center"}>
                {children}
                <div className={" w-full h-10 rounded bg-woodTexture bg-contain mb-5 border border-brown-400 flex justify-center"}>
                    <div className={'bg-woodPlaque  bg-[length:100%_100%] bg-no-repeat bg-center h-10 w-fit min-w-24 text-center text-sm p-2 pr-8 pl-8 font-bold text-brown-800 '}>
                        <h3 className={'translate-y-0.5'}>{category}</h3>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Shelf;