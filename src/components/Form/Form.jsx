import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { selectContacts } from 'redux/contacts/selectors';
import { addContactThunk } from 'redux/contacts/operations';

import {
  FormBtn,
  FormContainer,
  FormInput,
  FormInputLabel,
} from './Form.styled';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handlerFormInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const formSubmit = event => {
    event.preventDefault();
    if (
      contacts &&
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.info(`${name} is already in contacts`);
      formReset();
      return;
    }
    dispatch(addContactThunk({ name, number }));
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContainer onSubmit={formSubmit}>
      <FormInputLabel> Name</FormInputLabel>
      <FormInput
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handlerFormInputChange}
      />
      <FormInputLabel>Phone</FormInputLabel>
      <FormInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handlerFormInputChange}
      />
      <FormBtn type="submit">Add contact</FormBtn>
    </FormContainer>
  );
};
export default Form;
