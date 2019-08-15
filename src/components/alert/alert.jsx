import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './_alert.module.scss';

const Alert = props => {
  const {
    color,
  } = props;

  const AlertElement = 'div';

  const colorClassName = color ? styles['alert--color-' + color] : '';

  const classNames = classnames(styles['alert'], colorClassName);
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