import { ItemType } from '../__sharedTypes'

interface Props {
  items: ItemType[]
}

const List = ({items}: Props) => {

  return (
    <ul>
    {
      items.map((item) => {
        return <div>{item.title}</div>
      })
    }
    </ul>
  )
}

export default List