import React, { ReactNode } from "react";
import {Link,Outlet } from "react-router-dom";

interface Props {
  children: ReactNode
}

export default function MainLayout(props: Props) {

  return (
    <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
            <li>
              <Link to={`ViewCounterRedux`}>View Counter Redux</Link>
            </li>
            <li>
              <Link to={`ViewPrimary/1`}>View With Param id=1</Link>
            </li>
            <li>
              <Link to={`ViewPrimary/2`}>View With Param id=1</Link>
            </li>
            <li>
              <Link to={`ViewPrimary/1?test=A`}>View With Param id=1 and test=A</Link>
            </li>
            <li>
              <Link to={`ViewPrimary/2?test=B`}>View With Param id=2 and test=B</Link>
            </li>
            <li>
              <Link to={`Lazy/1?test=A`}>View Lazy With Param id=1 and test=A</Link>
            </li>
            <li>
              <Link to={`Lazy/2?test=B`}>View Lazy With Param id=2 and test=B</Link>
            </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
        {props.children}
        </div>
      </>
  )
}
