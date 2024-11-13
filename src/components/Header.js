import React from 'react';

const Header = () => (
  <header id="header">
    <div className="logo">
      <span className="icon fa-gem"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Dimension</h1>
        <p>
          A fully responsive site template designed by{' '}
          <a href="https://html5up.net">HTML5 UP</a> and released for free under the{' '}
          <a href="https://html5up.net/license">Creative Commons</a> license.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li><a href="#delocalizers">Delocalizers</a></li>
        <li><a href="#names">Names</a></li>
        <li><a href="#elements">Elements</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
