interface Props {
  item: {
    title: string,
    url: string,
    author: string,
    num_comments: number,
    points: number,
    objectID: number,
  }
}

const ListItem = ({item}: Props) => {

  return (
    <div>This is a list item</div>
  )
}