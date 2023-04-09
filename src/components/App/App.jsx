import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Wrapper, MainTitle } from './App.styled';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}

      <ContactList />
    </Wrapper>
  );
};
