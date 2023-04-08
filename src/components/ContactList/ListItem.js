import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { MdDelete } from 'react-icons/md';
import { Item, ItemWrapper, Text, Button } from './ListItem.styled';

export const ListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <ItemWrapper>
        <Text>{name}:</Text>
        <Text>{number}</Text>

        <Button type="button" onClick={handleDelete}>
          {/* Delete */}
          <MdDelete />
        </Button>
      </ItemWrapper>
    </Item>
  );
};
