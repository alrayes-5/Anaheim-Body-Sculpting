import React from 'react';
import { Link } from 'react-router-dom';

const TestimonialCard = ({ quote, author }: { quote: string, author: string }) => (
    <article className="bg-white p-8 rounded-lg shadow-lg h-full">
        <blockquote className="text-gray-600 italic text-lg mb-6">
          <p>"{quote}"</p>
        </blockquote>
        <p className="font-bold text-primary-dark text-right">— {author}</p>
    </article>
);

const GalleryImage = ({ src, alt, treatment }: { src: string, alt: string, treatment: string }) => (
    <figure className="group relative overflow-hidden rounded-lg h-full">
        <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 aspect-[3/4]" />
        <figcaption className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-end p-4">
            <h3 className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">{treatment}</h3>
        </figcaption>
    </figure>
);


const ResultsPage: React.FC = () => {
  return (
    <>
      <header className="bg-primary-dark text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold">Real Results, Real Confidence</h1>
          <p className="mt-4 text-xl text-gray-300">Every transformation begins with a goal—and ends with confidence.</p>
        </div>
      </header>

      <section className="py-20 bg-neutral-light" aria-labelledby="gallery-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="gallery-heading" className="text-3xl font-serif font-bold text-primary-dark">Before & After Gallery</h2>
            <p className="text-lg text-gray-600 mt-2">Client results may vary. All photos are used with consent.</p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0">
            <li><GalleryImage src="https://images.unsplash.com/photo-1581009137052-c0b24962b545?q=80&w=2070&auto=format&fit=crop" alt="Before and after for Sculpt treatment on abdomen" treatment="Sculpt Program (Abdomen)" /></li>
            <li><GalleryImage src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" alt="Before and after for Tone treatment on back" treatment="Tone Program (Back)" /></li>
            <li><GalleryImage src="https://images.unsplash.com/photo-1603217041434-3d9065a3a0e3?q=80&w=1974&auto=format&fit=crop" alt="Before and after for Sculpt treatment side profile" treatment="Sculpt Program (Flanks)" /></li>
            <li><GalleryImage src="https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=1985&auto=format&fit=crop" alt="Before and after for Tone treatment on legs" treatment="Tone Program (Legs)" /></li>
            <li><GalleryImage src="https://images.unsplash.com/photo-1605640107297-3c78a0029b38?q=80&w=1974&auto=format&fit=crop" alt="Before and after for Tighten treatment on arms" treatment="Tighten Program (Arms)" /></li>
            <li><GalleryImage src="https://images.unsplash.com/photo-1598266663439-2056561139f7?q=80&w=1974&auto=format&fit=crop" alt="Before and after for Tone treatment on glutes" treatment="Tone Program (Glutes)" /></li>
          </ul>
        </div>
      </section>

      <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 id="testimonials-heading" className="text-3xl font-serif font-bold text-primary-dark">What Our Clients Say</h2>
            </div>
            <ul className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto list-none p-0">
                <li>
                  <TestimonialCard 
                      quote="I finally feel comfortable wearing what I want again. The results were gradual but so natural! The team was professional and made me feel at ease throughout the entire process."
                      author="Alicia R."
                  />
                </li>
                <li>
                  <TestimonialCard 
                      quote="Professional, clean, and results-driven. I've tried other clinics—nothing compares to this experience. They create a personalized plan and truly care about your goals."
                      author="Michael L."
                  />
                </li>
            </ul>
        </div>
      </section>
      
      <section className="py-20 bg-secondary-light" aria-labelledby="cta-heading-results">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading-results" className="text-3xl font-serif font-bold text-primary-dark mb-8">Begin your own transformation story.</h2>
          <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-md text-lg transition-transform duration-300 transform hover:scale-105">
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default ResultsPage;