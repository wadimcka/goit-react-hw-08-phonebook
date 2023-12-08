import React from 'react';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Form from 'components/Form/Form';
import { Section } from 'components/Section/Section';

const ContactsPage = () => {
  return (
    <div>
      <Section title="Phonebook">
        <Form />
      </Section>

      <Section>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};

export default ContactsPage;
