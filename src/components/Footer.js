import React from 'react';

const Footer = () => {
  // get the navigate function

  const goBack = () => {
    // imperatively redirect back
  };

  const goForward = () => {
    // imperatively redirect forward
  };

  return (
    <footer>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </footer>
  );
};

export default Footer;
