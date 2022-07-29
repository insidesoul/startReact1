import "./styles.css";

import React from "react";
import { Book } from "./Book";
import { Preloader } from "./Preloader";

const App = (props) => {
  return props.isLoading ? (
    <Preloader />
  ) : (
    <div>
      <Book name="JS for beginners" year="2018" price="1000" />
      <Book name="React for beginners" year="2019" price="1000" />
      <Book year="2021" price="1500" />
    </div>
  );
};

export default App;
