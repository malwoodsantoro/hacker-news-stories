import { ItemType } from "../__sharedTypes";
import ListItem from './ListItem'

interface Props {
  items: ItemType[];
}

const List = ({ items }: Props) => {
  return (
    <ul>
      {items.map((item) => {
        return <ListItem item={item}/>
      })}
    </ul>
  );
};

export default List;
