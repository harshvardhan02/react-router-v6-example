import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Settings() {
  return (
    <>
      <div id='settingMenu'>
        <div>
          settings
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to={`/settings/general`}>
                General
              </NavLink>
            </li>
            <li>
              <NavLink to={`/settings/profile`}>
                Profile
              </NavLink>
            </li>
            {/* <li>
            <NavLink to={`settings/userSetting`}>
              User Setting
            </NavLink>
          </li> */}
          </ul>
        </nav>
      </div>
      <div
        id="detail">
        <Outlet />
      </div>
    </>
  )
}
