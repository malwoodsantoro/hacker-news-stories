interface Props {
  items: {
    title: string,
    url: string,
    author: string,
    num_comments: number,
    points: number,
    objectID: number,
  }[]
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