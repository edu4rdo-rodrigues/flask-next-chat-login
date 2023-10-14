// flask-next-chat-login/frontend/pages/index.tsx

import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { socket } from '@/utils/socket'
import { Cadastro, ConnectionManager, ConnectionState, Events, Login, MyForm } from '@/components/All'
import { useStoreIsConnected, useStoreUser, useStoreIsLogged } from '@/store/store'

const Home = () => {


  //const [isLogged, setIsLogged] = useState<Boolean>(false);
  //const [user, setUser] = useState<any>();

  const updateIsLogged = useStoreIsLogged((state) => state.updateIsLogged)
  const storeIsLogged = useStoreIsLogged((state) => state.isLogged)

  const updateUser = useStoreUser((state) => state.updateUser)
  const storeUser = useStoreUser((state) => state.user)
  
  /*const [isConnected, setIsConnected] = useState<any>(socket.connected);
  const [fooEvents, setFooEvents] = useState<any[]>([]);


  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
      console.log('Conectado ao servidor Socket.io web');
    }

    function onDisconnect() {
      setIsConnected(false);
      console.log('Desconectado ao servidor Socket.io web');
    }

    function onFooEvent(value: any) {
      setFooEvents(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);*/


  return (
    <>
      <div className="App">
        {
          storeIsLogged 
          ? 
            <>
              <h1>Voce esta logado</h1>
            </>
          :  
          <h1>Voce NÃO esta logado</h1>
        }
        <Login setIsLogged={updateIsLogged} setUser={updateUser} user={storeUser} />

        <Cadastro />
        

      </div>
    </>
  )
}

export default Home
