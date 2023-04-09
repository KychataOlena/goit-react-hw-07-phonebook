import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Wrapper, MainTitle } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};
