


import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../../src/App.css';

import img1 from '../../assests/img1.jpeg';
import img2 from '../../assests/img2.jpeg';
import img3 from '../../assests/img3.jpeg';
import img4 from '../../assests/img4.jpg';
import img5 from '../../assests/img5.jpeg';
import img6 from '../../assests/img6.jpeg';

// Read-more components
import Litigation from '../readmore/Litigation';
import BankingAndFinance from '../readmore/BankingAndFinance';
import CorporateAdvisory from '../readmore/CorporateAdvisoryAndRegulatoryCompliances';
import DisputeResolution from '../readmore/DisputeResolution';
import Competition from '../readmore/Comptetion';
import TechnologyMedia from '../readmore/TechnologyMediaAndCommunication';

const practiceAreas = [
  { title: 'Litigation', image: img1 },
  { title: 'Banking and Finance', image: img2 },
  { title: 'Corporate Advisory & Regulatory Compliances', image: img3 },
  { title: 'Dispute Resolution', image: img4 },
  { title: 'Competition', image: img5 },
  { title: 'Technology, Media and Communication', image: img6 },
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
      'Litigation': <Litigation />,
      'Banking and Finance': <BankingAndFinance />,
      'Corporate Advisory & Regulatory Compliances': <CorporateAdvisory />,
      'Dispute Resolution': <DisputeResolution />,
      'Competition': <Competition />,
      'Technology, Media and Communication': <TechnologyMedia />,
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
            <img src={area.image} alt={area.title} className="practice-image" />
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
        <Modal.Header closeButton>
          <Modal.Title>{selectedTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderComponent(selectedTitle)}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PracticeArea;
