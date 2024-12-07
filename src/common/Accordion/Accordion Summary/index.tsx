import { ArrowDown } from '@/assets/icons';
import { AccordionItem } from '@/types';
import type { FC } from 'react';
import './style.css'
interface AccordionSummaryProps {
    index: number;
    expandedIndex: number | null;
    toggleAccordion(index: number): void;
    item: AccordionItem
    className?: string
}


const AccordionSummary: FC<AccordionSummaryProps> = ({ index, item, expandedIndex, className, toggleAccordion }) => {
    return (
        <div id={`accordion-collapse-heading-${index}`} className={`${className} `}>
            <button
                type="button"
                className="accordion-summary rounded"
                onClick={() => toggleAccordion(index)}
                aria-expanded={expandedIndex === index}
                aria-controls={`accordion-collapse-body-${index}`}
            >
                <span>{item.title}</span>
                <ArrowDown className={`w-3 h-3 transform ${expandedIndex === index ? 'rotate-180' : ''} shrink-0`}/>            
            </button>
        </div>
    );
}

export default AccordionSummary;
