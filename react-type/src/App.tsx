import React from 'react';
import './App.css';
import { RepositoryList } from './component/Repository.list';
function App() {
  return (
    <div >
      <h1>Search for a Package</h1>
      <RepositoryList/>
    </div>

  );
}

export default App;
