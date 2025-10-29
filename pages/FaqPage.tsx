
import React from 'react';
import FaqItem from '../components/FaqItem';

const faqs = [
  {
    question: "Is it safe?",
    answer: "Yes. All treatments use FDA-cleared devices operated by trained, licensed professionals. Our technologies have been clinically tested for safety and efficacy. We prioritize your well-being above all else."
  },
  {
    question: "How many sessions will I need?",
    answer: "Most clients notice improvement after the first few sessions. A full program is typically 4–8 sessions per area, depending on your individual goals, body composition, and the treatment selected. We will create a personalized plan during your free consultation."
  },
  {
    question: "Is there any downtime?",
    answer: "None. Our treatments are completely non-invasive. You can resume your normal activities, including work and exercise, immediately after your session."
  },
  {
    question: "How long do results last?",
    answer: "Results can be long-lasting with a healthy lifestyle. For fat reduction, the treated fat cells are eliminated permanently. For muscle toning and skin tightening, maintenance sessions are recommended to preserve your outcome over time."
  },
  {
    question: "Who is a good candidate?",
    answer: "Our treatments are ideal for men and women who are close to their ideal body weight but struggle with stubborn pockets of fat, poor muscle definition, or skin laxity. It is for body refinement, not a weight-loss solution. A consultation will determine if you are a suitable candidate."
  },
   {
    question: "Does it hurt?",
    answer: "Most clients find the treatments comfortable. Fat reduction may feel like intense cooling and pulling, while muscle toning feels like strong but tolerable muscle contractions. Skin tightening is often described as a warm, relaxing sensation."
  },
];

const FaqPage: React.FC = () => {
  return (
    <>
      <div className="bg-primary-dark text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold">Frequently Asked Questions</h1>
          <p className="mt-4 text-xl text-gray-300">Your questions, answered.</p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
