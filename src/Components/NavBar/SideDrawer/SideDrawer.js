import React from 'react';
import './SideDrawer.css';

function SideDrawer(props) {
  let drawerClasses = 'side-drawer';

  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (<nav className={drawerClasses}>
    <ul>
      <li><a href="/">Home Page</a></li>
      <li><a href="/">Meals</a></li>
      <li><a href="/">Cook Book</a></li>
    </ul>
  </nav>
  )
}

export default SideDrawer;