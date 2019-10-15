import React from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';

import Button from '../button/button.jsx';

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

  handleCancel(event) {
    event.preventDefault();
    this.props.onCancel();
  }

  render() {
    const { onSubmit, onCancel, children } = this.props;
    const classNames = ['contact'].join(' ');
    return (
      <form className={classNames}>
        {React.Children.map(children, child =>
          React.cloneElement(child, { setValue: this.updateData })
        )}
        <div className="button-wrap">
          {onCancel ?
            <Button onClick={this.handleCancel.bind(this)} type="secondary">
              Cancel
                </Button> : null}
          {onSubmit ?
            <Button onClick={this.handleSubmit.bind(this)}>
              Submit
                </Button> : null}
        </div>
      </form>
    );
  }
}

Form.defaultProps = {
  className: '',
  onSubmit: () => { },
  onCancel: null,
  data: {}
}

Form.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  data: PropTypes.object,
  children: PropTypes.any.isRequired
};

export default Form;