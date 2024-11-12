import React from "react";
import "./TermsModal.css";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Yellow Header */}
        <div className="modal-header">
          <h2>Terms and Conditions</h2>
        </div>

        <div className="modal-body">
          <h4>Terms</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quis
            aliquid quos ex error fuga nihil. Excepturi fugit at error quibusdam
            obcaecati totam. Expedita tenetur iste, quidem suscipit qui quae!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            mollitia quos dicta ratione suscipit sed, earum accusamus totam,
            labore et impedit qui magnam quo corporis repudiandae ducimus
            excepturi ea optio?
            <br />
            <br />
          </p>
          <h4>Use License</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            inventore fugiat dicta nesciunt magnam, suscipit dignissimos est
            amet dolorem dolorum tempora architecto impedit. Iste nulla quidem
            eligendi quos mollitia totam? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Suscipit corrupti facilis, odit obcaecati nostrum
            qui officiis dicta, explicabo possimus voluptas quas maiores. In
            molestiae dignissimos dolorum harum reiciendis consequuntur at.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            consequatur quae qui consectetur debitis reprehenderit, nam
            voluptate saepe esse veniam incidunt eum vel quis nihil sed aperiam
            molestiae dolor blanditiis.
          </p>
        </div>

        <div className="modal-actions">
          <button className="agree-btn" onClick={onClose}>
            I AGREE
          </button>
          <button className="disagree-btn" onClick={onClose}>
            I DISAGREE
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
