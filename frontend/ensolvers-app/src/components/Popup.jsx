import React, { useRef } from 'react';

export default function PopUp({ isDisplayed, children }) {
  const popUpContainerRef = useRef(null);

  const handleClickOutside = (e) => {
    if (popUpContainerRef.current === e.target) {
        isDisplayed = false;
    }
  };

  return isDisplayed ? (
    <div
      ref={popUpContainerRef}
      onClick={handleClickOutside}
      style={{
        display: 'grid',
        placeItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'hsla(0, 0%, 25%, 0.75)',
      }}
    >
      {children}
    </div>
  ) : null;
}
