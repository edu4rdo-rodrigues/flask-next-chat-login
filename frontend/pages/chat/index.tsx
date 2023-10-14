// flask-next-chat-login/frontend/pages/chat.tsx

import React, { useEffect} from "react";
import axios from "axios";
import { IsConnected } from '@/types/All';
import { ConnectionManager, ConnectionState, MyForm } from "@/components/All"
import { socket } from '@/utils/socket'
import { useStoreIsConnected, useStoreUser, useStoreIsLogged } from '@/store/store'
import { API_BACKEND_URL } from "@/varEnv/exportVenv"



const Chat: React.FC = () => {
    //const [fooEvents, setFooEvents] = useState<any[]>([]);
    const updateIsLogged = useStoreIsLogged((state) => state.updateIsLogged)
    const isLogged = useStoreIsLogged((state) => state.isLogged)

    const updateisConnected = useStoreIsConnected((state) => state.updateisConnected)
    const IsConnected = useStoreIsConnected((state) => state.isConnected)

    const updateUser = useStoreUser((state) => state.updateUser)
    const storeUser = useStoreUser((state) => state.user)

    updateisConnected(socket.connected)


    useEffect(  () => {
        if (storeUser) {
            // Faça uma solicitação GET para buscar o nome do usuário com base no ID.
            axios.get(`${API_BACKEND_URL}/user/${storeUser.id}`)
            .then(response => {
            if (response.status === 200) {
                const userData = response.data;

                console.log('Nome do usuário:', userData.name);
                const userRes = storeUser
                userRes.nome = userData.name
        
                
                console.log("userRes", userRes);
                console.log("storeUser", storeUser);
                
            } else {
                console.error('Erro ao buscar o nome do usuário.');
            }
            })
            .catch(error => {
            console.error('Erro na solicitação:', error);
            }); 
        }
          
    },[storeUser])

    
    
    /*useEffect(() => {
        if (storeUser) {
    
          // Faça uma solicitação GET para buscar o nome do usuário com base no ID.
          axios.get(`${API_BACKEND_URL}/user/${storeUser.id}`)
            .then(response => {
              if (response.status === 200) {
                const userData = response.data;
               
    
               
               
                console.log("userData", userData);
    
              } else {
                console.error('Erro ao buscar o nome do usuário.');
              }
            })
            .catch(error => {
              console.error('Erro na solicitação:', error);
            });
        }
      },[storeUser])*/
  
  
    useEffect(() => {
      function onConnect() {
        updateisConnected(true);
        console.log('Conectado ao servidor Socket.io web');
      }
  
      function onDisconnect() {
        updateisConnected(false);
        console.log('Desconectado ao servidor Socket.io web');
      }
  
      //function onFooEvent(value: any) {
      //  setFooEvents(previous => [...previous, value]);
      //}
  
      socket.on('connect', onConnect);
      socket.on('disconnect', onDisconnect);
      //socket.on('foo', onFooEvent);
  
      return () => {
        socket.off('connect', onConnect);
        socket.off('disconnect', onDisconnect);
        //socket.off('foo', onFooEvent);
      };
    }, []);

    return (
        <>
            <h1>Rota para o Chat</h1>
            <ConnectionState isConnected={ IsConnected } />
            <ConnectionManager />,
            { 
                storeUser
                ?
                <>
                    <p>ID: {storeUser.id}</p>
                    <p>Nome: {storeUser.nome}</p>
                    <p>Email: {storeUser.email}</p>
                    <p>Senha: {storeUser.senha}</p>
                </>
                :
                <p>Nada</p>

            }
            { isLogged ?
                <>
                    <MyForm isConnected={IsConnected} />
                </>
            :
                <p>Nada</p>
            }
            
        </>
    )
}
export default Chat; // Exporte o componente como padrão