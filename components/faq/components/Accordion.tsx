import Image from 'next/image'
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import minus from "../../../public/minus.webp";
import plus from "../../../public/plus.png";

type Props = {
    question: string,
    answer: string,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    idx: number
}

const Accordion = ({question, answer, turn, setTurn, idx}: Props) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(contentRef.current){
            contentRef.current.style.maxHeight = turn[idx] ? `${contentRef.current.scrollHeight}px` : "0px";
        }
    }, [turn, idx]);

    const toggleAccordion = () => {
        const newTurn = [...turn];
        newTurn[idx] = !newTurn[idx];
        setTurn(newTurn);
    }

    return (
        <div className='flex flex-col w-full px-2 sm:px-4 md:px-6 py-2'>
            <button 
                onClick={toggleAccordion} 
                className='bg-transparent shadow w-full cursor-pointer transition-all duration-300 rounded-lg text-left'
            >
                <div className='py-2 sm:py-3 flex flex-col'>
                    <div className='flex items-center justify-between h-14'>
                        <span className='ml-2 font-medium lg:font-semibold lg:text-xl text-sm text-sky-500 break-words'>
                            {question}
                        </span>
                        <div className='flex-shrink-0'>
                            {turn[idx] ? (
                                <Image unoptimized src={minus} alt="Collapse" width={20} height={20}/>
                            ) : (
                                <Image unoptimized src={plus} alt="Expand" width={20} height={20}/>
                            )}
                        </div>
                    </div>
                    <div ref={contentRef} className='mx-2 sm:mx-4 overflow-hidden transition-all duration-500'>
                        <p className='py-1 font-normal leading-relaxed text-justify whitespace-pre-line text-white text-xs sm:text-sm md:text-base lg:text-lg break-words'>
                            {answer}
                        </p>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default Accordion;
