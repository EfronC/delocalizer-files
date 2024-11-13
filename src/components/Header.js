import React from 'react';

const Header = () => (
  <header id="header">
    <div className="logo">
      <span className="icon fa-gem"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Delocalizer</h1>
        <p>
          Just a simple page to share example resources for the Delocalizer project.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li><a href="#delocalizers">Delocalizers</a></li>
        <li><a href="#names">Names</a></li>
        {/*<li><a href="#elements">Elements</a></li>*/}
      </ul>
    </nav>
  </header>
);

export default Header;
