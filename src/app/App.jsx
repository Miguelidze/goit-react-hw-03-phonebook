import React, { Component } from "react";
import Form from '../Components/Form';
import ContactList from '../Components/ContactList';
import Filter from '../Components/Filter';
import Notification from '../Components/Notification';
import { ContainerMain, H1, H5 } from '../Components.styled'


class App extends Component {
    state = {
        contacts: [
            // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
        ],
        filter: '',
    }
    componentDidMount() {
        const contact = localStorage.getItem('contacts');
        const parsedContact = JSON.parse(contact);
        if (parsedContact) this.setState({ contacts: parsedContact });
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.contacts !== prevState.contacts) {
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        }
    }
    resetForm = ({ e }) => {
        e.target[0].value = '';
        e.target[1].value = '';
    }

    addContacts = ({ id, name, number, e }) => {
        if (this.state.contacts.find(el => el.name === name)) {
            alert(`${name} is already in contacts!`)
            return
        }
        const contact = { id, name, number };
        this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
        this.resetForm({ e });
    }

    filterString = (e) => {
        console.log(e);
        this.setState((prevState) => ({ filter: e.target.value }))
    }

    deleteContact = ({ id }) => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== id)
        }))
    }

    render() {

        return (
            <>
                <ContainerMain>
                    <H1>Phonebook</H1>
                    <Form
                        onSubmit={this.addContacts}
                    />
                    <H1>Contacts</H1>
                    {(this.state.contacts.length !== 0)
                        ? <>
                            <H5>Find contacts by name</H5>
                            <Filter
                                filterString={this.filterString}
                            />
                            {/*  */}
                            <ContactList
                                contacts={this.state.contacts}
                                filter={this.state.filter}
                                deleteContact={this.deleteContact}
                            />
                        </>
                        : <Notification message="Phonebook is empty" />}
                </ContainerMain>
            </>
        )
    }
}

export default App;