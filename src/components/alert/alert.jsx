import React from 'react';
import PropTypes from 'prop-types';

import styles from './_alert.module.scss';

const Alert = props => {
  const {
    color,
  } = props;

  const AlertElement = 'div';

  const colorClassName = color ? styles['alert--color-' + color] : '';

  const classNames = [styles['alert'], colorClassName].join(' ');
  console.log(classNames);

  return (
    <AlertElement className={classNames}>
      {props.children}
    </AlertElement>
  )
};


Alert.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired
};

export default Alert;