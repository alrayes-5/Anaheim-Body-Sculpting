import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        treatment: 'Not Sure',
        message: '',
    });
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('Sending...');
        // Simulate form submission
        setTimeout(() => {
            setFormStatus('Thank you! Your inquiry has been sent. We will contact you shortly.');
            setFormData({ name: '', email: '', phone: '', treatment: 'Not Sure', message: '' });
        }, 1500);
    };

    return (
        <>
            <div className="bg-white py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl font-serif font-bold text-primary-dark">Ready to Begin Your Transformation?</h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">Let's design your personalized treatment plan. Schedule your complimentary consultation today.</p>
                </div>
            </div>

            <div className="pb-20 bg-neutral-light">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Info & Hours */}
                        <div className="lg:col-span-1 bg-primary-dark text-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <span className="mt-1">📍</span>
                                    <span>123 Body Sculpting Way<br />Anaheim, California, 92801</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span>📞</span>
                                    <span>(555) 123-4567</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span>✉️</span>
                                    <span>contact@anaheimsculpting.com</span>
                                </div>
                            </div>

                            <hr className="my-8 border-gray-600" />

                            <h2 className="text-2xl font-bold mb-6">Clinic Hours</h2>
                            <div className="space-y-2">
                                <div className="flex justify-between"><span>Mon–Fri:</span><span>9:00 AM – 7:00 PM</span></div>
                                <div className="flex justify-between"><span>Sat:</span><span>10:00 AM – 4:00 PM</span></div>
                                <div className="flex justify-between"><span>Sun:</span><span>Closed</span></div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-primary-dark mb-6">Schedule Your Free Consultation</h2>
                            {formStatus ? (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                                    <span className="block sm:inline">{formStatus}</span>
                                </div>
                            ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                        <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                        <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                                </div>
                                <div>
                                    <label htmlFor="treatment" className="block text-sm font-medium text-gray-700">Treatment Interest</label>
                                    <select id="treatment" name="treatment" value={formData.treatment} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md">
                                        <option>Not Sure</option>
                                        <option>Sculpt - Fat Reduction</option>
                                        <option>Tone - Muscle Sculpting</option>
                                        <option>Tighten - Skin Renewal</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                                        Send Inquiry
                                    </button>
                                </div>
                            </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Embedded Map */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="h-96 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.5701833503197!2d-117.8519630234199!3d33.77123683344645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd9f1505c4839%3A0x1ba2f1f2378f168a!2sOC%20Safety%20CPR%20%26%20First%20Aid%20Training!5e0!3m2!1sen!2sus!4v1718055615715!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        // Fix: The allowFullScreen attribute is a boolean and should not be set to an empty string in JSX.
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Anaheim Body Sculpting Location"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default ContactPage;