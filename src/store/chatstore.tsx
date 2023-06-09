import { create } from "zustand";

export interface ChatStore {
conversation: Conversation
}

export interface Conversation {
  Conversation: {
    activeUserName: string,
    otherUserName: string,
    posts: Post[]
  }
}

export interface Post {
  message: string,
  read: boolean,
  timestamp: Date  
}

const createChatStore = () => ({
  
})

// import { create } from "zustand";

// const createPokemonStore = (set) => ({
//   pokemon: [],
//   fetchPokemon: async () => {
//     await fetch("https://pokeapi.co/api/v2/pokemon")
//       .then((response) => response.json())
//       .then((data) => set({ pokemon: data.results }));
//   },
// });

// const createCounterStore = (set, get) => ({
//   number: 123,
//   increaseCounterNumber: () => set((state) => ({ number: state.number + 1 })),
//   decreaseCounterNumber: () => set((state) => ({ number: state.number - 1 })),
//   logNumber: () => {
//     console.log(` Current number value equals ${get().number}`);
//   },
// });

// export const useCombinedStore = create((...params) => ({
//   ...createPokemonStore(...params),
//   ...createCounterStore(...params),
// }));
