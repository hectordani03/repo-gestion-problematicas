// LandingPage.jsx
import React, { useEffect } from 'react';
import landingImage from '@/assets/landing-image.jpg';
import Hero from '../components/Hero';
import GoogleBtn from '../components/GoogleBtn';
import RegisterBtn from '../components/RegisterBtn';
import LoginPrompt from '../components/LoginPrompt';
import useLogout from '../../auth/hooks/useLogout';
import { Alerts } from '@/shared/alerts';
import BenefitsSection from '../components/BenefitsSection';
import FAQSection from '../components/FAQSection';
import WhatIs from '../components/WhatIs';
import WhyReUC from '../components/WhyReUC';
import HelpSection from '../components/HelpSection';
import ContactSection from '../components/ContactSection';

const LandingPage = () => {
  const { error } = useLogout();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('token');

    if (isLoggedIn) {
      localStorage.removeItem('token');
      sessionStorage.setItem('showLogoutAlert', 'true');
    }

    if (sessionStorage.getItem('showLogoutAlert')) {
      Alerts.info('Sesión cerrada');
      sessionStorage.removeItem('showLogoutAlert');
    }
  }, []);

  return (
    <main className="w-full">
      <section className="flex items-center justify-between ml-15 h-screen">
        <div className='flex flex-col justify-center space-y-6 p-6 w-6/12 h-full'>
          <Hero />

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
              {error}
            </div>
          )}

          <div className='flex flex-col items-start w-11/12 gap-5'>
            <GoogleBtn />
            <div className="flex items-center gap-4 w-6/12">
              <hr className="flex-grow border-t border-gray-300 border-1" />
              <span className="text-sm text-gray-500">O</span>
              <hr className="flex-grow border-t border-gray-300 border-1" />
            </div>
            <RegisterBtn />
            <p className='w-5/12 text-sm ml-3 mb-5'>
              Al registrarte, aceptas los Términos de Servicio y Política de Privacidad,
              Incluida la política de Uso de Cookies.
            </p>
            <LoginPrompt />
          </div>
        </div>

        <div className='flex items-center justify-center w-6/12'>
          <img className='rounded-3xl' src={landingImage} alt="Landing visual" />
        </div>
      </section>

      <section id="faq">
        <WhatIs />
      </section>

      <section id="faq">
        <WhyReUC />
      </section>
      
      <section id="faq">
        <BenefitsSection />
      </section>

      <section id="faq">
        <FAQSection />
      </section>

      <section id="ayuda">
        <HelpSection />
      </section>

      <section id="contacto">
        <ContactSection />
      </section>
    </main>
  );
};

export default LandingPage;
