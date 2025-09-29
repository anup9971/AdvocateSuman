


import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../../src/App.css';

import img1 from '../../assests/new/img1.webp';
import img2 from '../../assests/new/img2.webp';
import img3 from '../../assests/new/img3.webp';
import img4 from '../../assests/new/img4.webp';
import img5 from '../../assests/new/img5.webp';
import img6 from '../../assests/new/img6.webp';

// Read-more components
import Litigation from '../readmore/Litigation';
import BankingAndFinance from '../readmore/BankingAndFinance';
import CorporateAdvisory from '../readmore/CorporateAdvisoryAndRegulatoryCompliances';
import DisputeResolution from '../readmore/DisputeResolution';
import Competition from '../readmore/Comptetion';
import TechnologyMedia from '../readmore/TechnologyMediaAndCommunication';

const practiceAreas = [
  { title: 'LITIGATION', image: img1 },
  { title: 'BANKING AND FINANCE', image: img2 },
  { title: 'CORPORATE ADVISORY & REGULATORY COMPLIANCES', image: img3 },
  { title: 'DISPUTE RESOLUTION', image: img4 },
  { title: 'COMPETITION', image: img5 },
  { title: 'TECHNOLOGY, MEDIA AND COMMUNICATION', image: img6 },
];

function PracticeArea() {
  const [show, setShow] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');

  const handleClose = () => {
    setShow(false);
    setSelectedTitle('');
  };
  const handleShow = (title) => {
    setSelectedTitle(title);
    setShow(true);
  };

  const renderComponent = (title) => {
    const components = {
      'LITIGATION': <Litigation />,
      'BANKING AND FINANCE': <BankingAndFinance />,
      'CORPORATE ADVISORY & REGULATORY COMPLIANCES': <CorporateAdvisory />,
      'DISPUTE RESOLUTION': <DisputeResolution />,
      'COMPETITION': <Competition />,
      'TECHNOLOGY, MEDIA AND COMMUNICATION': <TechnologyMedia />,
    };
    return components[title] || null;
  };

  return (
    <div className="practice-container">
      <h2 className="practice-heading" style={{color:"#561c24"}}>Practice Areas</h2>

      <div className="practice-grid">
        {practiceAreas.map((area, index) => (
          <div
            key={index}
            className="practice-card"
            onClick={() => handleShow(area.title)}
          >
            <img  loading="lazy" src={area.image} alt="Advocate Sukhjurist" className="practice-image" />
            <div className="practice-overlay">
              <h3>{area.title}</h3>
              <button className="read-more-btn btn btn-light px-3 py-1"  style={{ width: 'auto',color:"#561c24" }}>
  READ MORE
</button>

            </div>
          </div>
        ))}
      </div>

      {/* Bootstrap Modal */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header
  closeButton
  style={{
    backgroundColor: "#561c24",
    color: "white",
    display: "flex",
    justifyContent: "center",
    position: "relative"
  }}
  closeVariant="white"
>
  <Modal.Title   style={{
    margin: 0,
    color: "white",
    textAlign: "center",
    maxWidth: "80%",
    fontSize:"18px",
    whiteSpace: "normal",
    overflowWrap: "break-word",
    position: window.innerWidth > 768 ? "absolute" : "static", // desktop: absolute, mobile: static
    left: window.innerWidth > 768 ? "50%" : "auto",
    transform: window.innerWidth > 768 ? "translateX(-50%)" : "none",
  }}>
    {selectedTitle}
  </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:"white"}} >{renderComponent(selectedTitle)}</Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor:"#561c24"}} onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PracticeArea;
