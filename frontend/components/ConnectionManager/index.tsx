// flask-next-chat-login/frontend/components/ConnectionManager/index.tsx


import React from 'react';
import { socket } from '@/utils/socket';

export const ConnectionManager: React.FC = () => {
  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <>
      <button onClick={ connect }>Connect</button>
      <button onClick={ disconnect }>Disconnect</button>
    </>
  );
}