import React from 'react';
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
