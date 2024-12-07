'use client'
import { FC, ReactNode, useState } from 'react';
import AccordionSummary from './Accordion Summary';
import AccordionDetails from './Accordion Details';
import { AccordionItem } from '@/types';

interface AccordionProps {
    accordionItems: AccordionItem[];
}

const Accordion: FC<AccordionProps> = ({ accordionItems }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div id="accordion-collapse" data-accordion="collapse" className='h-full'>
            {accordionItems.map((item, index) => (
                <div key={index} className='mb-2'>
                    <AccordionSummary expandedIndex={expandedIndex} index={index} item={item} toggleAccordion={toggleAccordion} />
                    <AccordionDetails expandedIndex={expandedIndex} index={index} item={item} />
                </div>
            ))}
        </div>
    );
};

export default Accordion;
