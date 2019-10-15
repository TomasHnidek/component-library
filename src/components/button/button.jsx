import React from 'react';
import PropTypes from 'prop-types';

import styles from './_button.module.scss';

const Button = props => {
  const {
    className,
    type,
    color,
    size,
    href,
    disabled,
    loading
  } = props;
  
  const ButtonElement = href;
  
  const typeClassName = type ? styles['btn--type-' + type] : '';
  const colorClassName = color ? styles['btn--color-' + color] : '';
  const sizeClassName = size ? styles['btn--size-' + size] : '';
  const disabledClassName = disabled ? styles['btn--disabled'] : '';
  const loadingClassName = loading ? styles['btn--loading'] : '';
  
  const classNames = [styles['btn'], styles[className], typeClassName, colorClassName, sizeClassName, disabledClassName, loadingClassName].join(' ');
  return (
    <ButtonElement className={classNames} disabled={disabled || !!loading}>
      {loading &&
          <div className={styles['btn-spinner']}>
            <div className={styles['bounce1']}></div>
            <div className={styles['bounce2']}></div>
            <div className={styles['bounce3']}></div>
          </div>
      }
      
      <span className={styles['btn-content']}>{props.children}</span>
    </ButtonElement>
  )
};

Button.defaultProps = {
  href: 'button',
  className: '',
  size: 'sm',
  disabled: false,
  loading: false
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool
};

export default Button;