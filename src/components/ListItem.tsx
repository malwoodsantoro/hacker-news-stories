import { ItemType } from '../__sharedTypes'

interface Props {
  item: ItemType
}

const ListItem = ({item}: Props) => {

  return (
    <div>This is a list item</div>
  )
}