import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Validator from './validation/validator';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '',
      error: '',
      isFocus: false
    }
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.getClassNames = this.getClassNames.bind(this);
    this.validator = new Validator(props.validation);
  }

  onChange(event) {
    var data = this.validator.validate(event.target.value);
    this.setState({
      value: data.value,
      error: data.error
    });
    if (data.error === '') this.props.setValue(this.props.name, data.formattedValue);
  }

  onFocus() {
    this.setState({
      isFocus: true,
    });
  }

  onBlur() {
    this.setState({
      isFocus: false,
    });
  }

  render() {
    const { type, name, label } = this.props;
    const className = classnames('form-group', {
      focus: this.state.isFocus,
      open: this.state.value || this.state.isFocus,
      error: this.state.error
    });
    return (
      <div className={className}>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          id={name}
          value={this.state.value}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}/>
        <span>{this.state.error}</span>
      </div>
    );
  }
}

Input.defaultProps = {
  className: '',
  required: false,
  type: 'text',
  label: '',
  value: '',
  validation: {}
}

Input.propTypes = {
  className: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  validation: PropTypes.object,
  setValue: PropTypes.func.isRequired
};

export default Input;