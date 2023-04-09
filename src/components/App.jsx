import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsLoading, selectError, selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from './ContactForm/ContactForm';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from 'GlobalStyle';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MainTitle, SectionTitle, LoadingAlert } from './Title/Titles.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <GlobalStyle />
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <SectionTitle>Contacts</SectionTitle>
      {isLoading && !error && <LoadingAlert>Loading...</LoadingAlert>}
      {contacts.length > 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </Layout>
  );
};
