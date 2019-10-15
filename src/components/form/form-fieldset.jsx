import React from 'react';
import PropTypes from 'prop-types';

class Fieldset extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <fieldset>
        {React.Children.map(children, child =>
          React.cloneElement(child, { setValue: this.props.setValue })
        )}
      </fieldset>
    );
  }
}

Fieldset.defaultProps = {
  className: ''
}

Fieldset.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  setValue: PropTypes.func.isRequired
};

export default Fieldset;