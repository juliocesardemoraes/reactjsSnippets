import React, { useState } from "react";
import "./style.scss";

export default function Modal({ children }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="modal"
      content="modal"
      onClick={() => {
        if (showModal) setShowModal(false);
      }}
    >
      <button onClick={() => setShowModal(true)}>Mostrar Modal</button>
      {showModal && (
        <div className="modal__container">
          <div className="modal__container__content">{children}</div>
        </div>
      )}
    </div>
  );
}
