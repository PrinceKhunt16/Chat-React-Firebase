import React, { useContext } from 'react'
import { ChatContext } from '../context/ChatContext';
import Input from './Input'
import Messages from './Messages'
import { signOut } from 'firebase/auth'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../firebase'

const Chat = () => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <div className='friend'>
          {data.user.photoURL &&
            <img src={data.user?.photoURL} alt="" />
          }
        </div>
        <div className="user">
          <img src={currentUser.photoURL} alt="" />
          <button onClick={() => signOut(auth)}>logout</button>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat