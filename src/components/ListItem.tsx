import { ItemType } from "../__sharedTypes";

interface Props {
  item: ItemType;
  onRemove: Function;
}

const ListItem = ({ item, onRemove }: Props) => {
  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <button type="button" onClick={() => onRemove(item)}>
        X
      </button>
    </li>
  );
};

export default ListItem;
