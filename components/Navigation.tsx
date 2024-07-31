import React from 'react';
import Link from 'next/link';


const Navigation: React.FC = () => (

  <div>
   
    <nav className='navigation'>
    <ul className='navigation__list'>
      <li>
        <Link className='navigation__link' href="/">Home</Link>
      </li>
      <li>
        <Link className='navigation__link' href="/about">About</Link>
      </li>
      <li>
        <Link className='navigation__link' href="/contact">Systems</Link>
      </li>
      <li>
        <Link className='navigation__link' href="/blog">Services</Link>
      </li>
      <li>
        <Link className='navigation__link' href="/contact">Not Found</Link>
      </li>
    </ul>
  </nav></div>
  
);

export default Navigation;