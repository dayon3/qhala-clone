import Image from 'next/image';
import NextLink from 'next/link';

import { useState, useEffect } from 'react';

import logo from '../public/images/Logo.png';

export default function Nav() {
  const [click, setClick] = useState(false);

  const hideAndShowMobileNav = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');

    if (nav.classList.contains('show')) {
      setClick(true);
      hamburger.classList.remove('is-active');
      nav.classList.remove('show');
    } else {
      setClick(false);
      hamburger.classList.add('is-active');
      nav.classList.add('show');
    }
  };

  const toggleMenu = () => {
    const nav = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('show');
  };

  useEffect(() => {
    const nav = document.querySelector('.nav-links');
    nav.addEventListener('click', hideAndShowMobileNav);
    return () => {
      nav.removeEventListener('click', hideAndShowMobileNav);
    };
  }, [click]);

  return (
    <nav className={'nav active transition-all'}>
      <a href="#skip" className="skip-nav">
        Skip to content
      </a>
      <Image
        src={logo}
        width={155}
        height={80}
        alt="Qhala Logo"
        placeholder="blur"
      />

      <div
        onClick={toggleMenu}
        className="nav-menu hamburger hamburger--spin"
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </div>

      <div className="hidden lg:block nav-links">
        <NextLink href="#services">
          <a
            className={`text-lg font-bold p-1 sm:p-3 md:px-8 text-gray-800 hover:rounded hover:bg-yellow-500`}
          >
            What we do
          </a>
        </NextLink>
        <NextLink href="#practices">
          <a
            className={`text-lg font-bold p-1 sm:p-3 md:px-8 text-gray-800 hover:rounded hover:bg-yellow-500`}
          >
            Practice Areas
          </a>
        </NextLink>
        <NextLink href="#about">
          <a
            className={`text-lg font-bold p-1 sm:p-3 md:px-8 text-gray-800 hover:rounded hover:bg-yellow-500`}
          >
            About Us
          </a>
        </NextLink>
        <NextLink href="#getInTouch">
          <a
            className={`text-lg font-bold p-1 sm:p-3 md:px-8 text-gray-800 hover:rounded hover:bg-yellow-500`}
          >
            Contact
          </a>
        </NextLink>
      </div>
    </nav>
  );
}
