import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = ({ logout }) => (

    <div>
        <Sidebar logout={logout}/>
        <header className="bg-whitefixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
          <nav className="f6 fw6 ttu tracked">

          </nav>
        </header>
    </div>

);
export default Navbar