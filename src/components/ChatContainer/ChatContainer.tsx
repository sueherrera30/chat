import React from 'react';

import './ChatContainer.less';
import Navbar from '../Navbar/Navbar';
import Message from '../Message/Message';

import { BsPersonFillAdd, BsFillCameraVideoFill, BsThreeDots } from "react-icons/bs";

// interface chatContainertProps {
//     chatUser: string;
// }

const ChatContainer = () => {
  return (
    <div className='chatContainer'>
        <Navbar
					title="Abraham chavez"
					elements={(<>
							<BsPersonFillAdd />
							<BsFillCameraVideoFill />
							<BsThreeDots />
							</>)}
        />
       <div className='message-container'>
          <Message text="que paso baby?" typeOfMessage="sent"/>
          <Message text="nada tengo hambre y tu?" typeOfMessage="written"/>
       </div>
    </div>
  );
};

export default ChatContainer;