import React from 'react';
import PropTypes from 'prop-types';

import styles from './_button.module.scss';
import omit from 'object.omit';

const Button = props => {
  const {
    design
  } = props;
  let designClassName = design ? styles[`button-${design}`] : null;
  
  const classNames = [styles['button'], designClassName].join(' ');
  const safeProps = omit(props, ['design', 'children'])
  return (
    <button className={classNames} {...safeProps}>
      {props.children}
    </button>
  )
};

Button.defaultProps = {
  design: ''
};

Button.propTypes = {
  design: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Button;