import React from "react";

import Sidebar from '../../components/Sidebar/Sidebar';
import ChatContainer from '../../components/ChatContainer/ChatContainer'
import Input from '../../components/Input/Input'
import './home.less'

function Home() {
  return (
    <div className="home">
        <Sidebar />
        <div className="chat-side">
          <ChatContainer />
          <Input />
        </div>
    </div>
  );
}

export default Home;