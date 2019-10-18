import React from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';

import styles from '_form.module.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { ...props.data }
    }
    this.updateData = this.updateData.bind(this);
  }

  updateData(id, data) {
    const newState = this.state;
    lodash.set(newState.data, id, data)
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.data);
  }

  render() {
    const { children } = this.props;
    return (
      <form className={styles['form']} onSubmit={this.handleSubmit}>
        {React.Children.map(children, child =>
          React.cloneElement(child, { setValue: this.updateData })
        )}
      </form>
    );
  }
}

Form.defaultProps = {
  className: '',
  onSubmit: () => { },
  data: {}
}

Form.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  data: PropTypes.object,
  children: PropTypes.any.isRequired
};

export default Form;