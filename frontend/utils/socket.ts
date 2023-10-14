// flask-next-chat-login/frontend/utils/socket.ts

import { io } from 'socket.io-client';
import { API_SOCKET_URL } from '@/varEnv/exportVenv';

export const socket = io(`${API_SOCKET_URL}`);
    


