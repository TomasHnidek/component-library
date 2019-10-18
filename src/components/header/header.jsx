import React from 'react';
import PropTypes from 'prop-types';

import styles from './_header.module.scss';

const Header = props => {
  return (
    <div className={styles['header']}>
      <header role="banner">
          <div className={styles['global-actions']}>
            left side
          </div>
          <nav className={styles['personal-actions']}>
            right side
          </nav>
      </header>
    </div>
  )
};

Header.defaultProps = {
};

Header.propTypes = {
};

export default Header;