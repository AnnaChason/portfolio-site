//import { useState } from 'react'
import './App.css';
import Book from './components/Book.tsx';
import OpenBook from './components/OpenBook.tsx';
import Shelf from './components/Shelf.tsx';

function App() {

  return (
    <div className={"w-full h-full bg-green-400"}>
      <Shelf></Shelf>
      <Shelf></Shelf>
      <Shelf></Shelf>

    </div>
  );
}

export default App;
