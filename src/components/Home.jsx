import React from 'react';
import TestimonialSection from './partials/TesrimonialSection'; 
import HeroSection from './partials/HeroSection';
import PracticeArea from './partials/PracticeArea';
// import BlogSection from './part/BlogSection';
import ContactHome from './partials/ContactHome';
import AboutHome from './AboutHome';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    return (
        <>

 <Helmet>
  <title>Advocate Sukhjurist ‒ Expert Advocate in Delhi	</title>
  <meta
    name="description"
    content="Advocate Sukhjurist is an experienced advocate based in Delhi, specializing in civil, criminal, family, and corporate law. Contact for reliable representation & legal advice."
  />
  
  <meta name="keywords" content="Advocate Sukhjurist  " />


  <link rel="canonical" href="https://www.vhotelthegrandshoba.com/" />


  <meta name="robots" content="index, follow" />

</Helmet>
        <main className='overflow-y-hidden'>
            <HeroSection />
                <section id="about">
                    <AboutHome />
                </section>
                <section id="practice-areas" className="my-5">
                    <PracticeArea />
                </section>
                <section id="testimonials" className="my-5">
                    <TestimonialSection />
                </section>
                {/* <section id="spotlight" className="my-5">
                    <BlogSection />
                </section> */}
                <section id="contact" className="mt-5">
                    <ContactHome />
                </section>
        </main>

        </>
    )
}