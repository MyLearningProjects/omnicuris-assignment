import React from 'react';
import Courses from "./pages/Courses"

function App() {
  console.log(process.env)
  return (
      <div id="omnicuris-app">
          <h5 className="primary">React App</h5>
          <Courses/>
      </div>
  );
}

export default App;
