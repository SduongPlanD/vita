import React from 'react';
import './SideDrawer.css';

function SideDrawer(props) {
  let drawerClasses = 'side-drawer';

  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (<nav className={drawerClasses}>
    <ul>
      <li><a href="/">Today</a></li>
      <li><a href="/">Meal Library</a></li>
      <li><a href="/">History</a></li>
    </ul>
  </nav>
  )
}

export default SideDrawer;