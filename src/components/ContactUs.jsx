import React from 'react';
import Banner from './partials/Banner';
import ContactHome from './partials/ContactHome';
import { Helmet } from 'react-helmet-async';

const     ContactUsHome = () => {
  return (
 <>
    <Helmet>
               <title> Contact us - Advocate Sukhjurist</title>
               <meta
                 name="description"
                 content="Reach out to Advocate Sukhjurist for legal consultations. Get an address, phone, or send a message to discuss your case and legal requirements."
               />
               <meta name="keywords" content="awesome, website, resources, content" />
               <meta name="author" content="Your Name" />
     
               {/* SEO / Robots */}
               <meta name="robots" content="index, follow" />
               <meta name="googlebot" content="index, follow" />
     
               {/* Optional canonical URL */}
               <link rel="canonical" href="https://www.sukhjurist.com/contact" />
             </Helmet>
    <Banner/>
   <ContactHome/>
 </>
   
  );
};

export default ContactUsHome;
