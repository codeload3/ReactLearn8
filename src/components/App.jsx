import React from "react";
import Heading from "./Heading"; // importing the Heading module
import List from "./List"; // importing the List module

function App() {
  return (
    // notice the self closing tags of the React components when they don't have any child element
    <div>
      <Heading />
      <List />
      <List></List>
    </div>
  );
}

export default App; // exporting the App module
