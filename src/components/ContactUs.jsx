import React from 'react';
import { Container, Row, Col,  } from 'react-bootstrap';
import { FaPhone, FaInstagram, FaLinkedin,  FaTwitter } from 'react-icons/fa';
import ContactForm from './partials/ContactForm';
import Banner from './partials/Banner';
import ContactHome from './partials/ContactHome';

const     ContactUsHome = () => {
  return (
 <>
<div className="container-fluid">
  <div className="mb-0">
    <Banner/>
  </div>
 <div className="mb-3">
   <ContactHome/>
  </div>

</div>


 
 </>
   
  );
};

export default ContactUsHome;
