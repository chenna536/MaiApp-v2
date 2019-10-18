// import React from 'react';

const ScrollToTop = ({ children }) => {
  window.scrollTo(0, 0);
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [pathname]);
  return children || null;
};

export default ScrollToTop;
