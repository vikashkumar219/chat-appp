import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showDropDown, setShowDropDown] = React.useState(false);

  const toggleDropdown = () => setShowDropDown((prev) => !prev);

  return (
    <div className="navbar">
      <span className="logo">Virtual Chat</span>
      <div className="user">
        <a href="/profile">
          <img src="/images/user persion.png" alt="user image" />
        </a>
        <span>Vikash</span>
        <div className="chatIcons">
          <a href="#">
            <FontAwesomeIcon icon={faUserPlus} />
          </a>
        </div>

        <div className="moreOptions">
          <a href="#" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faEllipsisV} />
          </a>
          {showDropDown && (
            <div className="dropdownMenu">
              <ul>
                <li><a href="#">New Group</a></li>
                <li><a href="#">Starred messages</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Logout</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
