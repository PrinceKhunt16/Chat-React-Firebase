import React, { useContext, useState } from 'react'
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
          <div className='popup'>
            <div className='wrapper'>
              <h2>Hyy {currentUser.displayName}</h2>
              <button onClick={() => signOut(auth)}>logout</button>
            </div>
          </div>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat