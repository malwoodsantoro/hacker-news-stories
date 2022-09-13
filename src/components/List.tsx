import { ItemType } from "../__sharedTypes";
import ListItem from './ListItem'

interface Props {
  items: ItemType[];
  onRemoveListItem: Function;
}

const List = ({ items, onRemoveListItem }: Props) => {
  return (
    <ul>
      {items.map((item) => {
        return <ListItem key={item.objectID} item={item} onRemove={onRemoveListItem}/>
      })}
    </ul>
  );
};

export default List;
