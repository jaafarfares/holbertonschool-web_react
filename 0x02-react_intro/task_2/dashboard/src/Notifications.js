import React from "react";
import "./Notifications.css";
import { getLatestNotification } from './utils';

export function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
    <li data-priority="default">New course available</li>
    <li data-priority="urgent">New resume available</li>
    <li data-priority="high" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
  </ul>
      <button onClick={() => console.log('Close button has been clicked')} type="" aria-label="Close" style={{ marginLeft: '10px' }}>  <img src={require('./close-icon.png').default} alt="Close" />
</button>
    </div>
  );
}
