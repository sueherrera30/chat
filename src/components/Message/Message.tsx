import React, { FC } from 'react';
import './Message.less'
import UserImage from '../../assets/images/user.png';


interface MessageProps {
    text: string;
		typeOfMessage: string;
}

const Message: FC<MessageProps> = ({ text, typeOfMessage}) => {
  return (
    <>
		{
			typeOfMessage === 'sent' ? (
			<div className="message-sent">  
				<div className='message-sent--text'>
				<p>{text}</p>
				</div>
				<div className='message-sent--img'><img src={UserImage} alt='user' /></div>
    	</div>
			) : (
				<div className="message-received">
					<div className='message-received--img'><img src={UserImage} alt='user' /></div>
					<div className='message-received--text'>
						<p>{text}</p>
					</div>
			</div>
			)
		}
    </>
  );
};

export default Message;
