// flask-next-chat-login/frontend/components/ConnectionState/index.tsx

import React from 'react';
import { IsConnected } from '@/types/All';

export const ConnectionState: React.FC<IsConnected> = ({ isConnected }) => {
  return <p>State do servidor socket: { '' + isConnected }</p>;
}