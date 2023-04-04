import { nanoid } from 'nanoid';

import { Component } from 'react';
import { Wrapper } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = ({ name, number }) => {
    const newContact = {
      number: number,
      name: name,
      id: nanoid(),
    };

    let updatedContacts;
    const newContactName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (newContactName) {
      return alert(`${newContact.name} is already in contacts.`);
    } else {
      updatedContacts = [...this.state.contacts, newContact];
      this.setState({
        contacts: updatedContacts,
        name: '',
        number: '',
        filter: '',
      });
    }
  };


  handleFindName = evt => {
    const { value } = evt.target;
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({ filter: value, filteredContacts });
  };

  // Delete contact

  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const contacts = this.state.filter
    ? this.state.filteredContacts
    : this.state.contacts;
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onClickSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter
          onFindName={this.handleFindName}
          valueFilter={this.state.filter}
        />
        <ContactList contacts={contacts} 
    onClickDelete={this.handleDelete} />
      </Wrapper>
    );
  }
}