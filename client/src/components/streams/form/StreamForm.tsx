import React, { Component } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

class StreamForm extends Component<InjectedFormProps, any> {
  renderValidationMessage({ error, touched }: any) {
    if (touched && error) {
      console.log('inside if');
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderField = ({ input, label, type, meta }: any) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

    return (
      <div className={className}>
        <label htmlFor={label}>{label}</label>
        <input
          autoComplete="off"
          {...input}
          id={label}
          placeholder={label}
          type={type}
          value={input.value}
          onChange={input.onChange}
        />
        {this.renderValidationMessage(meta)}
      </div>
    );
  };

  onSubmit = (formValues: any) => {
    (this.props as any).onSubmit(formValues);

    // this.props.
  };

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderField} type="text" label="Title" />
        <Field name="description" component={this.renderField} type="text" label="Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues: any) => {
  const errors = {} as any;

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm', // Name of the form
  validate,
})(StreamForm);
