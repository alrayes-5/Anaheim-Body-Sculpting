import React from 'react';
import { Link } from 'react-router-dom';

const TreatmentDetailCard = ({ title, subtitle, description, details, videoUrl, reverse = false }: { title: string, subtitle: string, description: string, details: string[], videoUrl: string, reverse?: boolean }) => (
    <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className={` ${reverse ? 'md:order-last' : ''}`}>
            <div className="rounded-lg shadow-xl overflow-hidden aspect-video">
                <iframe
                    width="100%"
                    height="100%"
                    src={videoUrl}
                    title={`Video for ${title}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
        <div>
            <h2 className="text-3xl font-serif font-bold text-primary-dark">{title}</h2>
            <h3 className="text-xl font-semibold text-primary">{subtitle}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-4">
                {details.map((detail, i) => <li key={i}>{detail}</li>)}
            </ul>
        </div>
    </div>
);

const TreatmentsPage: React.FC = () => {
  return (
    <>
      <header className="bg-primary-dark text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold">Our Signature Programs</h1>
          <p className="mt-4 text-xl text-gray-300">Customized, non-invasive treatments to help you achieve your body goals.</p>
        </div>
      </header>

      <section className="py-20 bg-white" aria-labelledby="treatments-heading">
        <h2 id="treatments-heading" className="sr-only">Detailed Treatment Information</h2>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            <article>
                <TreatmentDetailCard 
                    title="Sculpt | Fat Reduction Program"
                    subtitle="Target stubborn fat safely and effectively."
                    description="Our non-invasive sculpting sessions use precision-controlled technology to target and eliminate fat cells in specific areas. This process helps you achieve smoother, more defined contours without surgery or downtime."
                    details={[
                        "Duration: 30–45 minutes per area",
                        "Recommended Sessions: 4–6",
                        "Results: Noticeable within weeks, improving over time",
                        "Ideal for: Abdomen, thighs, flanks, and arms"
                    ]}
                    videoUrl="https://www.youtube.com/embed/GNh_S4-rP4s"
                />
            </article>
            <article>
                <TreatmentDetailCard 
                    title="Tone | Muscle Sculpting Program"
                    subtitle="Strengthen, define, and refine your shape."
                    description="Stimulate deep muscle contractions equivalent to thousands of crunches or squats—without the gym. This advanced treatment tones and strengthens while redefining your silhouette, helping you build a stronger, more sculpted physique."
                    details={[
                        "Duration: 30 minutes",
                        "Ideal For: Abs, glutes, thighs, arms",
                        "Results: Firmer, more sculpted physique with consistent sessions",
                        "Benefit: Builds lean muscle and boosts metabolism"
                    ]}
                    videoUrl="https://www.youtube.com/embed/8I4__-OKC5k"
                    reverse={true}
                />
            </article>
            <article>
                 <TreatmentDetailCard 
                    title="Tighten | Skin Renewal Program"
                    subtitle="Restore firmness and elasticity to your skin."
                    description="Using gentle radiofrequency heat, this treatment stimulates collagen remodeling, tightens loose skin, and smooths fine lines for a rejuvenated look. It's a perfect solution for concerns related to aging, post-pregnancy, or weight loss."
                    details={[
                        "Perfect For: Post-pregnancy, post-weight loss, or natural aging concerns",
                        "Results: Progressive tightening and improved elasticity",
                        "Feel: A gentle, warming sensation during treatment",
                        "Benefit: Stimulates natural collagen for long-lasting results"
                    ]}
                    videoUrl="https://www.youtube.com/embed/rfy2yAQTb-M"
                />
            </article>
        </div>
      </section>

      <section className="py-20 bg-secondary-light" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-3xl font-serif font-bold text-primary-dark mb-4">Customized Treatment Plans</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
            Our consultation includes a comprehensive body assessment where we design a plan that aligns with your aesthetic goals, body composition, and lifestyle.
          </p>
          <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-md text-lg transition-transform duration-300 transform hover:scale-105">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default TreatmentsPage;