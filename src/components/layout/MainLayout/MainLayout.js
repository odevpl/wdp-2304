import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { updateViewportMode } from '../../../redux/screenSizeRedux';
import { useDispatch } from 'react-redux';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      let mode = '';

      if (windowWidth >= 992) {
        mode = 'desktop';
      } else if (windowWidth >= 768) {
        mode = 'tablet';
      } else if (windowWidth >= 576) {
        mode = 'mobile';
      } else {
        mode = 'small-mobile';
      }
      dispatch(updateViewportMode(mode));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch, windowWidth]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
