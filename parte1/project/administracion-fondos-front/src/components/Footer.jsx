import React from 'react';
import './Footer.css';

import { useHash } from '../hooks/useHash.js';

export function Footer() {
  const { hash } = useHash();

  return (
    <footer className='footer'>
      <h4>Identificador de la última transacción:</h4>
      <h5>{hash}</h5>
    </footer>
  );
}