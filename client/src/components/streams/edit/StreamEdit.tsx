import { pick } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../../actions';
import StreamForm from '../form/StreamForm';
import { StreamEditProps } from './streamEdit.interface';

class StreamEdit extends Component<StreamEditProps, {}> {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues: any) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a stream</h3>
        <StreamForm
          initialValues={pick(this.props.stream, ['title', 'description'])}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
