import React from 'react';
import SearchMovie from './components/SearchMovie';
// https://www.themoviedb.org/settings/api
function App() {
  return (
    <div className="App container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovie></SearchMovie>
    </div>
  );
}

export default App;
