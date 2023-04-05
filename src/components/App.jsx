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

  addContact = ( name, number ) => {
    const contact = {
      id: nanoid(),
      name,
      number,   
    };

    //let updatedContacts;
    //const newContactName = this.state.contacts.find(
      //contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    //);

  this.setState(prevState => {
    return { contacts: [contact, ...prevState.contacts] };
  });
  };

    //if (newContactName) {
      //return alert(`${newContact.name} is already in contacts.`);
    //} else {
    //updatedContacts = [...this.state.contacts, newContact];
      //this.setState({
        //contacts: updatedContacts,
        //name: '',
        //number: '',
        //filter: '',
      //});
    //}
  //};

deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value});
  };

  searchName = () => {
    const lowerCase = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact => 
      contact.name.toLowerCase().includes(lowerCase)
      );
    };

  // Delete contact



  render() {
    const {filter, contacts} = this.state;

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onClickSubmit={this.addContact} arr={contacts} />
        <h2>Contacts</h2>
        <Filter onChangeFilter={this.changeFilter} valueFilter={filter}/>
        {contacts.length > 0 && (
        <ContactList onClickDelete={this.deleteContact} contacts={this.searchName()}/>
        )}
      </Wrapper>
    );
  }
}