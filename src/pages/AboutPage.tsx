import React from 'react';
import { Link } from 'react-router-dom';

const PhilosophyPillar = ({ number, title, description }: { number: string, title: string, description: string }) => (
    <li className="text-center">
        <div className="flex items-center justify-center mx-auto mb-4 w-16 h-16 rounded-full bg-secondary-light">
            <span className="text-2xl font-bold text-primary">{number}</span>
        </div>
        <h3 className="text-xl font-bold text-primary-dark mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </li>
);


const AboutPage: React.FC = () => {
    const aboutImgBaseUrl = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&auto=format&fit=crop";

  return (
    <>
      <header className="bg-primary-dark text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold">About Us</h1>
          <p className="mt-4 text-xl text-gray-300">Empowering confidence through safe, effective, and evidence-based body transformation.</p>
        </div>
      </header>
      
      <section className="py-20 bg-white" aria-labelledby="mission-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <img 
                        src={`${aboutImgBaseUrl}&w=1929`}
                        srcSet={`${aboutImgBaseUrl}&w=640 640w, ${aboutImgBaseUrl}&w=768 768w, ${aboutImgBaseUrl}&w=1024 1024w, ${aboutImgBaseUrl}&w=1280 1280w, ${aboutImgBaseUrl}&w=1536 1536w, ${aboutImgBaseUrl}&w=1929 1929w`}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        alt="Clinic interior" 
                        className="rounded-lg shadow-xl" 
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <div>
                    <h2 id="mission-heading" className="text-3xl font-serif font-bold text-primary-dark mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        At Anaheim Body Sculpting, we believe that self-care is an investment in well-being. Our mission is to deliver transformative aesthetic results without compromising your safety, comfort, or lifestyle. We are dedicated to helping you achieve your body goals with the most advanced non-surgical technologies available.
                    </p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-light" aria-labelledby="philosophy-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="philosophy-heading" className="text-3xl font-serif font-bold text-primary-dark mb-4">Our Philosophy</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">Every treatment we provide is guided by three principles:</p>
            <ul className="grid md:grid-cols-3 gap-12 list-none p-0">
                <PhilosophyPillar number="01" title="Science-Driven" description="We rely on proven, non-invasive technologies that are backed by clinical research and FDA clearance." />
                <PhilosophyPillar number="02" title="Client-Focused" description="We listen, plan, and personalize. Your goals are our goals, and your journey is unique to you." />
                <PhilosophyPillar number="03" title="Integrity First" description="We promise only what we can deliver—and we deliver what we promise with transparency and care." />
            </ul>
        </div>
      </section>

      <section className="py-20 bg-white" aria-labelledby="team-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="team-heading" className="text-3xl font-serif font-bold text-primary-dark mb-4">Our Team</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
                Our certified specialists and licensed practitioners bring extensive experience in non-surgical aesthetics. Each member of our team is trained in advanced body contouring techniques, ensuring your experience is both safe and satisfying.
            </p>
            <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition-transform duration-300 transform hover:scale-105">
                Meet Our Specialists
            </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;