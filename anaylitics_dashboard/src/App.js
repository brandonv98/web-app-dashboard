import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  render() {
    return (

      <div className="App">
          <header className="main-header flex col-12 clearfix">
            <h2 className="main-logo">Your<span className="trademark">App&#8482;</span></h2>

            <div className="avitar">
              <a href="#"><span className="notification"><span className="notification-dot">&#8226;</span></span></a>
              <span className="bar"></span>
              <div className="avitar-pic"></div>
              <a href="#"><span className="avitar-name">Jack Diven</span></a>
            </div>
          </header>

        <main className="main-body flex">
          <nav className="main-side-nav ">
          <ul className="side-nav">
            <li className="icons"><a href="#?" className="link"><span className="icon-hover"></span><span className='dashboard-icon'></span></a></li>
            <li className="icons"><a href="#?" className="link"><span className="icon-hover hidden"></span><img src="icons/icon-members.svg" alt="members" /></a></li>
            <li className="icons"><a href="#?" className="link"><span className="icon-hover hidden"></span><img src="icons/icon-visits.svg" alt="visits" /></a></li>
            <li className="icons"><a href="#?" className="link"><span className="icon-hover hidden"></span><img src="icons/icon-settings.svg" alt="settings" /></a></li>
          </ul>
        </nav>
      </main>

      </div>
    );
  }
}
