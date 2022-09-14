import React, { useReducer, useEffect } from "react";
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

export type storiesAction =
  | { type: "SET_STORIES"; payload: string }
  | { type: "REMOVE_STORY"; payload: any };

interface storiesState {
  data: [] | ItemType[];
}

// REDUCER FUNCTION always receives a state and an action

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

const storiesReducer = (state: any, action: storiesAction) => {
  switch (action.type) {
    case "SET_STORIES":
      return { ...state, data: action.payload };
    case "REMOVE_STORY":
      return {
        ...state,
        data: state.data.filter(
          (story: ItemType) => action.payload.objectID !== story.objectID
        ),
      };
    default:
      throw new Error();
  }
};

const App = () => {
  const [searchTerm, setSearchTerm] = useLocalStorage("search", "React");
  const [stories, dispatchStories] = useReducer(storiesReducer, { data: [] });

  useEffect(() => {
    fetch(`${API_ENDPOINT}react`)
      .then((response) => response.json())
      .then((result) => {
        dispatchStories({
          type: "SET_STORIES",
          payload: result.hits,
        });
      });
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.data.filter((story: ItemType) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRemoveStory = (item: any) => {
    dispatchStories({
      type: "REMOVE_STORY",
      payload: item,
    });
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
