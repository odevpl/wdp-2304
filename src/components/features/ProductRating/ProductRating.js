import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductRating.module.scss';

import { useDispatch } from 'react-redux';
import { addUserStars } from '../../../redux/productsRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const ProductRating = props => {
  const [userStars, setUserStars] = useState(props.userStars ? props.userStars : 0);
  const [hoverStars, setHoverStars] = useState(undefined);
  const dispatch = useDispatch();
  const id = props.id;

  const handleClick = (e, starsClicked) => {
    e.preventDefault();
    if (userStars === 0) {
      setUserStars(starsClicked);
      dispatch(addUserStars({ id, starsClicked }));
    }
  };

  const handleMouseOver = i => {
    if (userStars === 0) setHoverStars(i);
  };

  const handleMouseOff = () => {
    setHoverStars(undefined);
  };

  const renderStarIcon = i => {
    if (userStars !== 0) return userStars < i ? farStar : faStar;
    else if (hoverStars) return hoverStars < i ? farStar : faStar;
    else return i <= props.stars ? faStar : farStar;
  };

  const accessStarStyles = i => {
    if (userStars !== 0) return styles.hoverStars;
    else if (hoverStars) return hoverStars < i ? styles.stars : styles.hoverStars;
    else return styles.stars;
  };

  const classes = [];

  if (props.noPadding) {
    classes.push(styles.noPadding);
  }

  return (
    <div className={` ${styles.content} ${classes.join(' ')}`}>
      <h5>{props.name}</h5>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='#'>
            <FontAwesomeIcon
              key={i}
              className={accessStarStyles(i)}
              icon={renderStarIcon(i)}
              onClick={e => handleClick(e, i)}
              onMouseOver={() => handleMouseOver(i)}
              onMouseOff={handleMouseOff}
            >
              {i} stars
            </FontAwesomeIcon>
          </a>
        ))}
      </div>
    </div>
  );
};

ProductRating.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  stars: PropTypes.number,
  userStars: PropTypes.number,
  noPadding: PropTypes.bool,
};

export default ProductRating;
