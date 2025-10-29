import React from 'react';
import { Link } from 'react-router-dom';

const TreatmentCard = ({ icon, title, subtitle, description, details, link }: { icon: string, title: string, subtitle: string, description: string, details: string, link: string }) => (
  <article className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
    <img src={icon} alt={`${title} icon`} className="mx-auto h-20 w-20 mb-4 rounded-full object-cover" />
    <h3 className="text-2xl font-serif font-bold text-primary-dark mb-2">{title}</h3>
    <p className="font-semibold text-primary mb-4">{subtitle}</p>
    <p className="text-gray-600 mb-4">{description}</p>
    <p className="text-sm text-gray-500 italic mb-6">{details}</p>
    <Link to={link} className="font-bold text-primary hover:text-secondary-DEFAULT transition-colors">Learn More &rarr;</Link>
  </article>
);

const WhyChooseUsItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <article className="flex flex-col items-center text-center">
    <div className="flex-shrink-0 mb-4">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-secondary-light text-primary">
        {icon}
      </div>
    </div>
    <h4 className="text-lg leading-6 font-medium text-primary-dark">{title}</h4>
    <p className="mt-2 text-base text-gray-600">{description}</p>
  </article>
);

const HomePage: React.FC = () => {
  const heroBaseUrl = "https://images.unsplash.com/photo-1631217873202-6e7e3a6a4a6b?q=80&auto=format&fit=crop";
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center text-white" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img 
          src={`${heroBaseUrl}&w=1974`}
          srcSet={`${heroBaseUrl}&w=640 640w, ${heroBaseUrl}&w=768 768w, ${heroBaseUrl}&w=1024 1024w, ${heroBaseUrl}&w=1280 1280w, ${heroBaseUrl}&w=1536 1536w, ${heroBaseUrl}&w=1974 1974w`}
          sizes="100vw"
          alt="Calm and professional clinic treatment room" 
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="hero-heading" className="text-4xl md:text-6xl font-serif font-bold mb-4">Refine Your Shape. Restore Your Confidence.</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">Experience advanced, non-invasive body contouring—backed by science, trusted by professionals, and tailored to your goals.</p>
          <div className="space-x-4">
            <Link to="/contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 text-lg rounded-md shadow-md transition-transform duration-300 transform hover:scale-105">Book Your Consultation</Link>
            <Link to="/treatments" className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-primary-dark text-white font-bold py-4 px-10 text-lg rounded-md transition-all duration-300 transform hover:scale-105">Explore Treatments</Link>
          </div>
        </div>
      </section>

      {/* About Our Approach Section */}
      <section className="py-20 bg-white" aria-labelledby="approach-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 id="approach-heading" className="text-3xl font-serif font-bold text-primary-dark mb-6">Our Approach to Body Sculpting</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">At Anaheim Body Sculpting, we specialize in safe, effective, and FDA-cleared body contouring solutions designed to help you look and feel your best—without surgery, downtime, or discomfort.</p>
          <p className="text-lg text-gray-600 leading-relaxed">Our team combines state-of-the-art technology with personalized treatment plans to deliver visible, lasting results. Whether your goal is fat reduction, skin tightening, or muscle toning, we provide care that's guided by expertise and focused on you.</p>
        </div>
      </section>

      {/* Core Treatment Categories Section */}
      <section className="py-20 bg-neutral-light" aria-labelledby="core-treatments-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="core-treatments-heading" className="sr-only">Our Core Treatments</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <TreatmentCard 
              icon="https://images.unsplash.com/photo-1616529345100-73c15370b329?q=80&w=1974&auto=format&fit=crop"
              title="Sculpt"
              subtitle="Fat Reduction"
              description="Our non-invasive sculpting sessions use precision-controlled technology to reduce fat cells in targeted areas—helping you achieve smoother, more defined contours."
              details="Ideal for: abdomen, thighs, flanks, arms. Typical results: visible improvement after a few sessions with no recovery time."
              link="/treatments"
            />
            <TreatmentCard 
              icon="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1974&auto=format&fit=crop"
              title="Tone"
              subtitle="Muscle Sculpting"
              description="Using advanced electromagnetic muscle stimulation, our toning sessions enhance muscle definition while improving body composition."
              details="Ideal for: abs, glutes, and arms. Benefit: build lean muscle and boost metabolism for a stronger physique."
              link="/treatments"
            />
            <TreatmentCard 
              icon="https://images.unsplash.com/photo-1617923485104-585641c02b37?q=80&w=1974&auto=format&fit=crop"
              title="Tighten"
              subtitle="Skin Renewal"
              description="Our skin-tightening treatment combines heat and radiofrequency energy to stimulate collagen production, lift sagging areas, and enhance skin texture."
              details="Ideal for: post-weight loss, aging skin, or post-pregnancy tightening."
              link="/treatments"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white" aria-labelledby="why-choose-us-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="why-choose-us-heading" className="text-3xl font-serif font-bold text-primary-dark">Why Choose Anaheim Body Sculpting?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            <WhyChooseUsItem icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>} title="Medical-Grade Technology" description="We use FDA-approved, clinically tested equipment for safe and measurable results." />
            <WhyChooseUsItem icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>} title="Personalized Care" description="Our specialists tailor each treatment plan to your individual goals and body type." />
            <WhyChooseUsItem icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>} title="No Downtime" description="Resume your day immediately—no surgery, no scars, no recovery time." />
            <WhyChooseUsItem icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>} title="Trusted Expertise" description="Our licensed professionals are trained in the latest aesthetic technologies." />
            <WhyChooseUsItem icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>} title="Elegant Environment" description="Enjoy a calm, private, and relaxing setting designed for your comfort." />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-secondary-light" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-3xl font-serif font-bold text-primary-dark mb-6">Ready to Take the Next Step?</h2>
          <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-md text-lg transition-transform duration-300 transform hover:scale-105">
            Book Your Complimentary Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;