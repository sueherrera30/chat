import React from 'react';

import Chat from '../Chats/Chats';
import Search from '../Search/Search'
import './Sidebar.less'
import UserImage from '../../assets/images/user.png';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* Header */}
      <div className='header'>
        <p className='header--title'>Chatty</p>
        <div className='header--elements'>
          <div className='header--user'>
            <div className='header--user-img'><img src={UserImage} alt='main user' /></div>
            <p className='header--user-name'>Sue Martinez</p>
          </div>
          <button>log out</button>
        </div>
      </div>
      {/* search bar */}
      <Search />
      {/* chats container */}
      <div className='chats-container'> 
        <div>
          {Array.from({length: 12}, () => <Chat nameUser="Abraham Chavez" preliminarText="hello cielo" />)}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
