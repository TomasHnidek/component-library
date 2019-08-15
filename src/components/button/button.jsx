import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './_button.scss';

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
  
  const typeClassName = type ? 'btn--type-' + type : '';
  const colorClassName = color ? 'btn--color-' + color : '';
  const sizeClassName = size ? 'btn--size-' + size : '';
  const disabledClassName = disabled ? 'btn--disabled' : '';
  const loadingClassName = disabled ? 'btn--loading' : '';
  
  const classNames = classnames('btn', className, typeClassName, colorClassName, sizeClassName, disabledClassName, loadingClassName);
  console.log(classNames);

  return (
    <ButtonElement className={classNames} disabled={disabled || loading}>
      {loading &&
          <div className={'btn-spinner'}>
            <div className={'bounce1'}></div>
            <div className={'bounce2'}></div>
            <div className={'bounce3'}></div>
          </div>
      }
      
      <span className={'btn-content'}>{props.children}</span>
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