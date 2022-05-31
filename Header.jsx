import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header>
      <h1> Papel y Boli... <FontAwesomeIcon icon={faPen}/></h1>
    </header>
  );
}

export default Header;
