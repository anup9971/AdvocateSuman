import React from 'react';
import TestimonialSection from './partials/TesrimonialSection'; 
import HeroSection from './partials/HeroSection';
import PracticeArea from './partials/PracticeArea';
// import BlogSection from './part/BlogSection';
import ContactHome from './partials/ContactHome';
import AboutHome from './AboutHome';

export default function Home() {
    return (
        <main>
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
    )
}