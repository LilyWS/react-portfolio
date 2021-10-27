import React from 'react';
import Nav from './nav';

function Header({setPage}) {
  return (
    <header>
      <h1>lily's portfolio</h1>
      <Nav setPage={setPage}/>
    </header>
  )
}

export default Header