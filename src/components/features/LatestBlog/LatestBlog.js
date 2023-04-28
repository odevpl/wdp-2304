import React from 'react';

import styles from './LatestBlog.module.scss';
import LatestBlogBox from '../../common/LatestBlogBox/LatestBlogBox';
import HeaderPanelBar from '../../common/HeaderPanelBar/HeaderPanelBar';

const LatestBlog = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.featureBar}>
          <div className='row no-gutters align-items-end'>
            <HeaderPanelBar title='Latest blog' />
            <div className={'col-auto ' + styles.dots}>
              <ul>
                <li>
                  <a className={styles.active}>.</a>
                </li>
                <li>
                  <a>.</a>
                </li>
                <li>
                  <a>.</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row'>
          <LatestBlogBox isActive={true} />
          <LatestBlogBox />
          <LatestBlogBox />
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
