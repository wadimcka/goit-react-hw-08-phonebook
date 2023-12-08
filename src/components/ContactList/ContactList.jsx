import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectfiltredContacts,
  selectisLoading,
} from 'redux/contacts/selectors';
import ContactItem from 'components/Contact/ContactItem';
import { Loader } from 'components/Loader/Loader';
import { fetchAllContactsThunk } from 'redux/contacts/operations';

import { ListOfContacts } from './ContactList.styled';

function ContactList() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectisLoading);
  const filteredContacts = useSelector(selectfiltredContacts);

  useEffect(() => {
    dispatch(fetchAllContactsThunk());
  }, [dispatch]);

  return (
    <ListOfContacts>
      {isLoading && <Loader />}
      {filteredContacts &&
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
    </ListOfContacts>
  );
}

export default ContactList;
