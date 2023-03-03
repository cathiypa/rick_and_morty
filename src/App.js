import { useState } from 'react';
import './App.css';

import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx'; 
import { Routes, Route, RouterProvider } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail';


function App () {
  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
   fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
}
const onClose = (id) =>{ 
  setCharacters(characters.filter((char) => char.id !== id))
}
  return (
    <div className='App' style={{ padding: '25px' }}>
      <NavBar onSearch={onSearch}/>
      <hr/>
    <Routes>
      <Route path="/about" element={<About />}/>
      <Route path="/home" element={ 
        <Cards characters={characters} onClose={onClose}/>
      }/>
      <Route path='/Detail/:detailId' element={<Detail />}/>
    </Routes>
    </div>
  );
}

export default App
