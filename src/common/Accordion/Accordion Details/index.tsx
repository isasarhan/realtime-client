import { AccordionItem } from '@/types';
import type { FC, ReactNode } from 'react';

interface AccordionDetailsProps {
    item: AccordionItem;
    index: number;
    expandedIndex: number | null;
    className?: string
}

const AccordionDetails: FC<AccordionDetailsProps> = ({ className, item, index, expandedIndex }) => {
    return (
        <div
            id={`accordion-collapse-body-${index}`}
            className={`${className} overflow-hidden transition-all duration-300 ${expandedIndex === index ? 'max-h-screen' : 'max-h-0'}`}
            aria-labelledby={`accordion-collapse-heading-${index}`}
        >
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 max-h-60 overflow-y-scroll">
                <p className="mb-2 text-gray-500 dark:text-gray-400">{item.content || item.children}</p>
                {item.links && (
                    <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                        {item.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                                <a href={link.href} className="text-blue-600 dark:text-blue-500 hover:underline">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default AccordionDetails;
