import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createStream } from '../../../actions';
import { FormValue } from '../common.interface';
import StreamForm from '../form/StreamForm';
import { StreamCreateProps} from './streamCreate.interface';

class StreamCreate extends Component<StreamCreateProps, {}> {
  onSubmit = (formValues: FormValue) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
