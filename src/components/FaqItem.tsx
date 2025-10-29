
import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-left"
      >
        <span className="text-lg font-medium text-primary-dark">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-10 text-gray-600">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;