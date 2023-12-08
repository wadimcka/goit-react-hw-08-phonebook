import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteContactThynk } from 'redux/contacts/operations';

import {
  Contact,
  DeleteContactBtn,
  SpanName,
  Spanphone,
} from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handlDeleteContact = () => {
    dispatch(deleteContactThynk(id));
  };

  return (
    <div>
      <Contact>
        <SpanName>{name}</SpanName> : <Spanphone>{number}</Spanphone>
        <DeleteContactBtn type="button" onClick={handlDeleteContact}>
          Delete
        </DeleteContactBtn>
      </Contact>
    </div>
  );
};

export default ContactItem;
