import React, { FC } from 'react';
import './Chats.less'
import UserImage from '../../assets/images/user.png';


interface ChatsProps {
    nameUser: string;
    preliminarText: string;
}

const Chats: FC<ChatsProps> = ({ nameUser, preliminarText}) => {
  return (
    <div className="chat">
        <div className='chat--img'><img src={UserImage} alt='user' /></div>
        <div className='chat--texts'>
            <p>{nameUser}</p>
            <span>{preliminarText}</span>
        </div>
    </div>
  );
};

export default Chats;
