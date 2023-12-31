import React, { Component } from 'react';
import style from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = name => e => {
    const { target } = e;

    this.setState(() => ({
      [name]: target.value,
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState(() => ({
      name: '',
      number: '',
    }));
  };

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className={style.inputName}
            value={this.state.name}
            onChange={this.handleChange('name')}
            type="text"
            name="name"
            pattern="^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+(\s[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            className={style.inputNumber}
            value={this.state.number}
            onChange={this.handleChange('number')}
            type="tel"
            name="number"
            pattern="(\+48)?\s?(\d{3}-\d{3}-\d{3}|\d{3}\s\d{3}\s\d{3}|\d{9,11})"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={style.buttonEditor}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
