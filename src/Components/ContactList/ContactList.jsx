import React from "react";
import { ContainerForm, Ul, Li, Span, Button } from '../../Components.styled';

function ContactList({ contacts, filter, deleteContact }) {

    function filtered() {
        return contacts.filter(({ name }) =>
            name.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
    }

    function renderMarkUp() {
        return filtered().map(({ id, name, number }) => {
            return (<Li key={id}>
                <Span>{name}: {number}</Span>
                <Button onClick={() => deleteContact({ id })}>Delete</Button>
            </Li>)
        })
    }

    return (
        <ContainerForm>
            <Ul>
                {renderMarkUp()}
            </Ul>
        </ContainerForm>
    )
}

export default ContactList;