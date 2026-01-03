//import { useState } from 'react'
import './App.css';
import Book from './components/Book.tsx';
import OpenBook from './components/OpenBook.tsx';

function App() {

  return (
    <div>
        <Book title={"the Secret Garden"} color={"yellow"}/>
        <OpenBook content={"idk gardens are cool"} title={"the Secret Garden"}  color={"purple"}/>

    </div>
  );
}

export default App;
