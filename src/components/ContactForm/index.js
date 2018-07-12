import React from 'react';
import styled from 'styled-components';

import {collapse, placeholder, shake} from '../../utils/style';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Collapsible = styled.div`
  ${props => collapse(props.collapse)};
`;

const Alert = styled.div`
  border: 2px solid ${props => props.theme.colors.onDark};
  margin-bottom: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.sm};
`;

const Form = styled.form``;

const Field = styled.div`
  border-color: ${props =>
    props.error ? props.theme.colors.errorOnDark : props.theme.colors.onDark};
  border-style: solid;
  border-width: 2px;
  color: ${props =>
    props.error ? props.theme.colors.errorOnDark : props.theme.colors.onDark};
  line-height: 0;
  margin-bottom: ${props => props.theme.spacing.md};
  position: relative;
  ${props => (props.error ? shake() : '')} ${placeholder(
      props =>
        props.error
          ? props.theme.colors.errorOnDark
          : props.theme.colors.onDark,
    )};
`;

const Label = styled.label`
  position: absolute;
`;

const Input = styled.input`
  background: none;
  border: 0;
  color: ${props => props.theme.colors.onDark};
  line-height: ${props => props.theme.line.md};
  padding: 0 ${props => props.theme.spacing.sm};
  width: 100%;
`;

const SelectField = Field.extend`
  height: 64px;

  &:after {
    content: '↓';
    display: block;
    position: absolute;
    line-height: 100%;
    right: 10px;
    top: 15px;
  }
`;

const Select = styled.select`
  appearance: none;
  background: transparent;
  border: 0;
  color: ${props => props.theme.colors.onDark};
  line-height: ${props => props.theme.line.md};
  height: 100%;
  padding: 0 ${props => props.theme.spacing.sm};
  width: 100%;
`;

const TextArea = styled.textarea`
  ${placeholder(props => props.theme.colors.onDark)} background: none;
  border: 0;
  color: ${props => props.theme.colors.onDark};
  padding: ${props => props.theme.spacing.sm};
  width: 100%;
`;

const Button = styled.button`
  background: none;
  border: 2px solid ${props => props.theme.colors.onDark};
  color: ${props => props.theme.colors.onDark};
  padding: ${props => props.theme.spacing.sm};
  text-align: center;
  width: 100%;
`;

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      budget: '',
      message: '',
      fieldsWithErrors: [],
      formSubmitted: false,
    };
  }

  validateForm = () => {
    const fieldsWithErrors = {};
    for (let key of Object.keys(this.state)) {
      let value = this.state[key];
      if (value === '') fieldsWithErrors[key] = true;
    }

    if (Object.keys(fieldsWithErrors).length) {
      this.setState({
        fieldsWithErrors: fieldsWithErrors,
      });
      return false;
    }

    return true;
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.validateForm()) return;

    fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: encode({'form-name': 'contact', ...this.state}),
    })
      .then(() => this.setState({formSubmitted: true}))
      .catch(error => alert(error));
  };

  handleChange = e => {
    const {fieldsWithErrors} = this.state;
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  clearValidation = e => {
    const {fieldsWithErrors} = this.state;
    if (e.target.value !== '') {
      delete fieldsWithErrors[e.target.name];
      this.setState({fieldsWithErrors});
    }
  };

  validateField = e => {
    const fieldsWithErrors = {};
    if (e.target.value === '') {
      fieldsWithErrors[e.target.name] = true;
      this.setState({fieldsWithErrors});
    }
  };

  render() {
    const {name, email, message, fieldsWithErrors, formSubmitted} = this.state;

    return (
      <div>
        <Collapsible collapse={!formSubmitted}>
          <Alert>Form submitted!</Alert>
        </Collapsible>

        <Collapsible collapse={formSubmitted}>
          <Form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}>
            <Input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out: <Input name="bot-field" />
              </label>
            </div>
            <Field error={fieldsWithErrors['name']}>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                onBlur={this.validateField}
                onKeyUp={this.clearValidation}
                placeholder="Your name"
              />
            </Field>
            <Field error={fieldsWithErrors['email']}>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                onBlur={this.validateField}
                onKeyUp={this.clearValidation}
                placeholder="Your email"
              />
            </Field>
            {/*<SelectField error={fieldsWithErrors['budget']}>
              <Select name="budget" onChange={(e) => { this.handleChange(e); this.clearValidation(e) }}>
                <option value="">Budget</option>
                <option>$5k-10k</option>
                <option>$10k-20k</option>
                <option>$20k-50k</option>
                <option>$50k+</option>
              </Select>
            </SelectField>*/}
            <Field error={fieldsWithErrors['message']}>
              <TextArea
                name="message"
                value={message}
                onChange={this.handleChange}
                onBlur={this.validateField}
                onKeyUp={this.validateField}
                placeholder="Project description"
                rows="5"
              />
            </Field>
            <Field>
              <Button type="submit">Submit &rarr;</Button>
            </Field>
          </Form>
        </Collapsible>
      </div>
    );
  }
}

export default ContactForm;
