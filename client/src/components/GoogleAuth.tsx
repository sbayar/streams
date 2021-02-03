import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component<any, {}> {
  auth: any;

  componentDidMount() {
    const windowObject: any = window;

    windowObject.gapi.load('client:auth2', () => {
      windowObject.gapi.client
        .init({
          clientId: '318021992413-pep71ksmmv842f16s9v7u6g4ctlk1chn.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = windowObject.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn: boolean) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <button className="ui loading basic button small">Loading</button>;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red button small" onClick={this.onSignOutClick}>
          <i className="google icon"></i>
          Sign out
        </button>
      );
    } else {
      return (
        <button className="ui green button small" onClick={this.onSignInClick}>
          <i className="google icon"></i>
          Sign in with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state: any) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
