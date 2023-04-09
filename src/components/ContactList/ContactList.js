import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { List } from './ContactList.styled';
import { ListItem } from './ListItem';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  // console.log(contacts);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.map(contact => (
        <ListItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
