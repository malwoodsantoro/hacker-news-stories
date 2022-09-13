import { ItemType } from "../__sharedTypes";

interface Props {
  item: ItemType;
}

const ListItem = ({ item }: Props) => {
  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </li>
  );
};

export default ListItem;
