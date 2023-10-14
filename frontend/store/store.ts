import { create } from 'zustand'

type type_useStoreIsConnected = {
    //set: (partial: unknown, replace?: boolean | undefined) => void
    isConnected: any
    updateisConnected: (isConnected: any) => void
}
export const useStoreIsConnected = create<type_useStoreIsConnected>((set) => ({
    isConnected: null,
    updateisConnected: (isConnected) => set(() => ({ isConnected: isConnected})),
    //removeAllBears: () => set({ bears: 0 }),
}))


type type_useStoreUser = {
    user: any
    updateUser: (user: any) => void
}
export const useStoreUser = create<type_useStoreUser>((set) => ({
    user: null,
    updateUser: (user) => set(() => ({ user: user})),
}))
  

type type_useStoreIsLogged = {
    isLogged: any
    updateIsLogged: (isLogged: any) => void
}
export const useStoreIsLogged = create<type_useStoreIsLogged>((set) => ({
    isLogged: null,
    updateIsLogged: (isLogged) => set(() => ({ isLogged: isLogged }))
}))