import React, {useState} from "react";
import "./App.css";
import Search from "./components/Search";
import List from "./components/List";
import useLocalStorage from "./hooks/useLocalStorage";
import { ItemType } from "./__sharedTypes";

const initialStories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useLocalStorage("search", "React");
  const [stories, setStories] = useState(initialStories);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRemoveStory = (item: ItemType) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );

    setStories(newStories);
  };


  return (
    <div>
      <h1>Hacker News Stories</h1>

      <Search term={searchTerm} onSearch={handleSearch} />

      <hr />

      <List items={searchedStories} onRemoveListItem={handleRemoveStory} />
    </div>
  );
};

export default App;
