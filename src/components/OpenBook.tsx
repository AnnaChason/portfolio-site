import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ColorMap from '../style/ColorMap.ts'
import type {BookProps} from "./Book.tsx";

const CLOSE_EASE = 'cubic-bezier(0.55, 0.06, 0.68, 0.19)';
const CLOSE_PAGE_MS = 520;
const CLOSE_BACKDROP_MS = 420;
/** Unmount after the longest close motion + one frame. */
const CLOSE_ANIMATION_MS = Math.max(CLOSE_PAGE_MS, CLOSE_BACKDROP_MS) + 40;

type OpenBookProps = BookProps & {
    onClick: () => void;

};
const OpenBook: React.FC<OpenBookProps> = (
    {title, content, color, onClick, titlePage}) => {
    const [closing, setClosing] = useState(false);
    const closeStartedRef = useRef(false);
    const onCloseRef = useRef(onClick);
    onCloseRef.current = onClick;

    const backdropRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    const requestClose = () => {
        if (closeStartedRef.current) return;
        closeStartedRef.current = true;
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            onCloseRef.current();
            return;
        }
        setClosing(true);
    };

    /**
     * CSS `forwards` from the open animation prevents a new `@keyframes` rule from starting when
     * classes swap. Drive the close with the Web Animations API so it always runs.
     */
    useLayoutEffect(() => {
        if (!closing) return;
        if (typeof window === 'undefined') return;

        const l = leftRef.current;
        const r = rightRef.current;
        const b = backdropRef.current;
        if (!l || !r || !b) return;

        for (const el of [l, r, b]) {
            el.getAnimations().forEach((a) => a.cancel());
        }

        l.animate(
            [{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(-32deg)' }],
            { duration: CLOSE_PAGE_MS, easing: CLOSE_EASE, fill: 'forwards' }
        );
        r.animate(
            [{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(32deg)' }],
            { duration: CLOSE_PAGE_MS, easing: CLOSE_EASE, fill: 'forwards' }
        );
        b.animate(
            [{ opacity: 1 }, { opacity: 0 }],
            { duration: CLOSE_BACKDROP_MS, easing: CLOSE_EASE, fill: 'forwards' }
        );
    }, [closing]);

    useEffect(() => {
        if (!closing) return;
        const t = window.setTimeout(() => {
            onCloseRef.current();
        }, CLOSE_ANIMATION_MS);
        return () => window.clearTimeout(t);
    }, [closing]);

    const backdropClass = closing
        ? 'opacity-100'
        : 'opacity-0 motion-safe:animate-book-open-backdrop motion-reduce:opacity-100';

    const pageMotionLeft = closing ? '' : 'motion-safe:animate-book-open-left';
    const pageMotionRight = closing ? '' : 'motion-safe:animate-book-open-right';

    const blockPointer = closing ? 'pointer-events-none' : '';

    const leftClass =
        `flex h-full w-52 origin-right justify-center rounded-l backface-hidden p-3 pr-0 sm:w-96 ${pageMotionLeft} ` +
        ColorMap[color];
    const rightClass =
        `flex h-full w-52 origin-left justify-center rounded-r p-3 pl-0 sm:w-96 ${pageMotionRight} ` +
        ColorMap[color];

    return (
        <div>
            <div
                ref={backdropRef}
                className={`fixed inset-0 z-[40] bg-black/20 backdrop-blur-sm ${backdropClass} ${blockPointer}`}
                aria-hidden
            />
            <div
                className={`fixed inset-0 z-[50] flex items-center justify-center ${blockPointer}`}
                onClick={requestClose}
            >
                <div
                    className="[perspective:1200px] m-1"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex h-[40rem] drop-shadow-lg [transform-style:preserve-3d] sm:h-[30rem]">
                    <div ref={leftRef} className={leftClass.trim()}>
                        <div className={"flex h-full w-full items-center justify-center bg-amber-50 pl-2 text-brown-800"}>
                            {titlePage || <h1 className={"text-center font-bold font-serif text-3xl sm:text-5xl"}>{title}</h1>}
                        </div>
                    </div>
                    <div className={"flex w-5 justify-center pt-3 pb-3 " + ColorMap["d"+color]}>
                        <div className={"h-full w-full bg-gradient-to-r from-amber-50 to-parchment-300"}></div>
                        <div className={"h-full w-full bg-gradient-to-l from-amber-50 to-parchment-300"}></div>
                    </div>
                    <div ref={rightRef} className={rightClass.trim()}>
                        <div className={"flex h-full w-full overflow-y-scroll bg-amber-50 p-3 pt-5 text-brown-900 text-md sm:overflow-y-hidden sm:text-lg"}>
                            {content}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OpenBook;
