import React from 'react';
import { Link } from 'react-router-dom';

// FIX: Made the `children` prop optional to resolve TypeScript errors where the compiler
// was incorrectly inferring that children were not being provided to the SocialIcon component.
const SocialIcon = ({ children, href }: { children?: React.ReactNode; href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary-DEFAULT transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold tracking-wider">Licensed & Insured • FDA-Cleared Equipment • Confidential Consultations</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-serif text-2xl font-bold mb-4">Anaheim Body Sculpting</h4>
            <p className="text-gray-400">Refine Your Shape. Restore Your Confidence.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-secondary-DEFAULT">About Us</Link></li>
              <li><Link to="/treatments" className="hover:text-secondary-DEFAULT">Treatments</Link></li>
              <li><Link to="/faq" className="hover:text-secondary-DEFAULT">FAQ</Link></li>
              <li><a href="#" className="hover:text-secondary-DEFAULT">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary-DEFAULT">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <SocialIcon href="#">
                {/* FIX: Removed extraneous clipRule property from svg path. */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.795 2.013 10.148 2 12.315 2zm-1.161 14.59a4.269 4.269 0 004.268-4.268 4.269 4.269 0 00-4.268-4.268 4.269 4.269 0 00-4.268 4.268 4.269 4.269 0 004.268 4.268zm0-1.28a3 3 0 110-5.999 3 3 0 010 5.999zm6.536-7.802a1.282 1.282 0 11-2.563 0 1.282 1.282 0 012.563 0z" /></svg>
              </SocialIcon>
              <SocialIcon href="#">
                {/* FIX: Removed extraneous clipRule property from svg path. */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </SocialIcon>
               <SocialIcon href="#">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.6 7.35c.07.1.07.23 0 .33l-5.2 5.2a.23.23 0 01-.33 0l-2.6-2.6a.23.23 0 010-.33l.55-.55c.1-.1.23-.1.33 0l2.05 2.05 4.65-4.65c.1-.1.23-.1.33 0l.55.55z" /></svg>
               </SocialIcon>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Anaheim Body Sculpting – All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;