import React from 'react';
import { Link } from "react-router-dom";
import { Home } from "../../pages/home";
import { About } from "../../pages/about";
import { Contact } from "../../pages/contact";

const Header = () => (
  <header>
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
    <hr />
  </header>
)


export { Header };
